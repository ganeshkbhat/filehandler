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
Object.defineProperty(exports, "__esModule", { value: true });
var filehandler_1 = require("./src/filehandler");
exports.default = {
    FileHandler: filehandler_1.default.FileHandler,
    FileHandlerStatic: filehandler_1.default.FileHandlerStatic
};
