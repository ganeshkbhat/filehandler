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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHandlerStatic = exports.FileHandler = void 0;
var filehandler_1 = __importDefault(require("./src/filehandler"));
var filehandler_2 = require("./src/filehandler");
Object.defineProperty(exports, "FileHandler", { enumerable: true, get: function () { return filehandler_2.FileHandler; } });
Object.defineProperty(exports, "FileHandlerStatic", { enumerable: true, get: function () { return filehandler_2.FileHandlerStatic; } });
exports.default = {
    FileHandler: filehandler_1.default.FileHandler,
    FileHandlerStatic: filehandler_1.default.FileHandlerStatic
};
