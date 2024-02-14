/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
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

export interface FileHandlerStaticInterface {
  readFileStreaming: (filePath: string, encoding: string) => any
  writeFileStreaming: (filePath: string, iterableData: any[], encoding: string) => any
}

export interface FileHandlerInterface {
  readFileStreaming: (filePath: string, encoding: string) => any
  writeFileStreaming: (filePath: string, iterableData: any[], encoding: string) => any
}

export class FileHandlerStatic implements FileHandlerInterface {

  readFileStreaming(filePath: string, encoding: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let readStream = fs.createReadStream(filePath);
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding || 'UTF8');
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => { resolve(Buffer.concat(chunks)); });
    });
  }

  writeFileStreaming(filePath: string, iterableData: any[], encoding: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const finished = util.promisify(stream.finished); // (A)
        const writable = fs.createWriteStream(filePath);
        // writable.setEncoding(encoding || 'UTF8'); 
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

export class FileHandler implements FileHandlerInterface {

  filePath: string;
  encoding: string;

  constructor(filePath: string, encoding: string) {
    this.filePath = filePath;
    this.encoding = encoding || 'UTF8';
  }

  readFileStreaming(): Promise<any> {
    return new Promise((resolve, reject) => {
      let readStream = fs.createReadStream(this.filePath);
      let chunks: any[] = [];
      // readerStream.setEncoding(encoding);
      readStream.on('error', (err: any) => { reject(err); });
      readStream.on('data', (chunk: any) => { chunks.push(chunk); });
      readStream.on('end', () => { resolve(Buffer.concat(chunks)); });
    });
  }

  writeFileStreaming(iterableData: any[]): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const finished = util.promisify(stream.finished); // (A)
        const writable = fs.createWriteStream(this.filePath);
        // writable.setEncoding(encoding); 
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
