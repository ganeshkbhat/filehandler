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

const filehandler = require("../index").default;

const FileHandler = filehandler.FileHandlerStatic;

const fs = new FileHandler();
(async () => {
  let tst = await fs.readFileStreaming("./demos/profile.jpeg");
  tst = tst;
  console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming("./demos/profile.jpeg", tst);
  console.log("written: ", written);
})()

