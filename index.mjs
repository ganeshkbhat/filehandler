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

import { default as filehandler } from "./index";

export { FileHandlerInterface, FileHandlerStaticInterface } from "./index";
export { FileHandler, FileHandlerStatic } from "./index";

export default {
  FileHandler: filehandler.FileHandler,
  FileHandlerStatic: filehandler.FileHandlerStatic
}
