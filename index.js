/**
 *
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/streamfs
 * File: index.js
 * File Description: Read and Write files in files using streaming
 *
 *
*/
/* eslint no-console: 0 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var filehandler_1 = __importDefault(require("./src/filehandler"));
exports.default = {
    FileHandler: filehandler_1.default.FileHandler,
    FileHandlerStatic: filehandler_1.default.FileHandlerStatic
};
