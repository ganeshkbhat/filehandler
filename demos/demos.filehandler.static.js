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

const filehandler = require("../index").default;

const FileHandler = filehandler.FileHandlerStatic;

const fs = new FileHandler();
(async () => {
  let tst = await fs.readFileStreaming("./demos/demos.test.txt", 'utf8');
  tst = tst;
  // console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming("./demos/demos.test.txt", tst, 'utf8');
  console.log("written: ", written);
})()

