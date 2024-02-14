/**
 * 
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/stream-fs
 * File: index.js
 * File Description: Read and Write files in files using streaming
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import * as fs from "node:fs";
import { Buffer } from 'node:buffer';
import { once } from 'node:events';
import * as util from 'node:util';
import * as stream from 'node:stream';

/**
 *
 *
 * @export
 * @interface FileHandlerStaticInterface
 */
export interface FileHandlerStaticInterface {
  readFileStreaming: (filePath: string, options?: object | null | undefined) => Promise<any>
  writeFileStreaming: (filePath: string, iterableData: any[], options?: object | null | undefined) => Promise<any>
}

/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
export interface FileHandlerInterface {
  filePath: string;
  options: object | null | undefined;
  readFileStreaming: () => Promise<any>
  writeFileStreaming: (iterableData: any[]) => Promise<any>
}

/**
 *
 *
 * @export
 * @class FileHandlerStatic
 * @implements {FileHandlerStaticInterface}
 */
export class FileHandlerStatic implements FileHandlerStaticInterface {

  /**
   *
   *
   * @param {string} filePath
   * @param {(string | null | undefined)} [options]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  readFileStreaming(filePath: string, options?: object | null | undefined): Promise<any> {
    return new Promise((resolve, reject) => {
      let readStream = fs.createReadStream(filePath, options || {});
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding || { encoding: 'UTF8' });
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => { resolve(Buffer.concat(chunks)); });
    });
  }

  /**
   *
   *
   * @param {string} filePath
   * @param {any[]} iterableData
   * @param {(string | null | undefined)} [options]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  writeFileStreaming(filePath: string, iterableData: any[], options?: object | null | undefined): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const finished = util.promisify(stream.finished); // (A)
        const writable = fs.createWriteStream(filePath, options || {});
        for await (const chunk of iterableData) {
          // Handle backpressure
          if (!writable.write(chunk)) { await once(writable, 'drain'); }
        }
        writable.end();
        await finished(writable);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }
}

/**
 *
 *
 * @export
 * @class FileHandler
 * @implements {FileHandlerInterface}
 */
export class FileHandler implements FileHandlerInterface {
  filePath: string;
  options: object | null | undefined;

  /**
   * Creates an instance of FileHandler.
   * @param {string} filePath
   * @param {(string | null | undefined)} [options]
   * @memberof FileHandler
   */
  constructor(filePath: string, options?: object | null | undefined) {
    this.filePath = filePath;
    this.options = options;
  }

  /**
   *
   *
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  readFileStreaming(): Promise<any> {
    return new Promise((resolve, reject) => {
      let readStream = fs.createReadStream(this.filePath, this.options || {});
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding);
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => { resolve(Buffer.concat(chunks)); });
    });
  }

  /**
   *
   *
   * @param {any[]} iterableData
   * @return {*}  {Promise<any>}
   * @memberof FileHandler
   */
  writeFileStreaming(iterableData: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const finished = util.promisify(stream.finished); // (A)
        const writable = fs.createWriteStream(this.filePath, this.options || {});
        // writable.setEncoding(encoding); 
        for await (const chunk of iterableData) {
          if (!writable.write(chunk)) { await once(writable, 'drain'); }
        }
        writable.end();
        await finished(writable);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default {
  FileHandler,
  FileHandlerStatic
}
