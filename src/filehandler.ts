/**
 * 
 * Package: fs-handlers
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i fs-handlers --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/fs-handlers
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
export class FileHandlerStaticInterface {
  static readFileStreaming: (filePath: string | URL, options?: BufferEncoding | any | undefined) => Promise<any>
  static writeFileStreaming: (filePath: string | URL, iterableData: any[], options?: BufferEncoding | any | undefined) => Promise<any>
}

/**
 *
 *
 * @export
 * @interface FileHandlerInterface
 */
export interface FileHandlerInterface {
  filePath: string | URL;
  options: BufferEncoding | any | undefined;
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
   * @param {string | URL} filePath
   * @param {(string | null | undefined)} [options]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  static readFileStreaming(filePath: string | URL, options?: BufferEncoding | any | undefined): Promise<any> {
    return new Promise((resolve, reject) => {
      let readStream = fs.createReadStream(filePath, options || {});
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding || { encoding: 'UTF8' });
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => {
        Buffer.isBuffer(chunks[0]) ? resolve(Buffer.concat(chunks)) : resolve(chunks.join(""));
      });
    });
  }

  /**
   *
   *
   * @param {string | URL} filePath
   * @param {any[]} iterableData
   * @param {(string | null | undefined)} [options]
   * @return {*}  {Promise<any>}
   * @memberof FileHandlerStatic
   */
  static writeFileStreaming(filePath: string | URL, iterableData: any[], options?: BufferEncoding | any | undefined): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const finished = util.promisify(stream.finished); // (A)
        const writable = fs.createWriteStream(filePath, options || "utf8");
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
  filePath: string | URL;
  options: BufferEncoding | any | undefined;

  /**
   * Creates an instance of FileHandler.
   * @param {string | URL} filePath
   * @param {(string | null | undefined)} [options]
   * @memberof FileHandler
   */
  constructor(filePath: string | URL, options?: BufferEncoding | any | undefined) {
    // if (!filePath || !options) {
    //   throw new Error('file path and options have to provided \n\n type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "utf-16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex" \n\n ')
    // }
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
      let readStream = fs.createReadStream(this.filePath, this.options);
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding || { encoding: 'UTF8' });
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => {
        Buffer.isBuffer(chunks[0]) ? resolve(Buffer.concat(chunks)) : resolve(chunks.join(""));
      });
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
        const writable = fs.createWriteStream(this.filePath, this.options);
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

export default {
  FileHandler,
  FileHandlerStatic
}
