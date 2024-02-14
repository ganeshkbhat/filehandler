/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { default as filehandler } from "../src/index";

const FileHandler = filehandler.FileHandler;
const FileHandlerStatic = filehandler.FileHandlerStatic;

const fs = new FileHandler("./demos.test.txt");

