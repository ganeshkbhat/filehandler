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

const FileHandler = filehandler.FileHandler;

const fs = new FileHandler("./demos/demos.test.txt", "utf8");
(async () => {
  let tst = await fs.readFileStreaming();
  tst = tst.toString(fs.options);
  console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming(tst);
  console.log("written: ", written);
})()

