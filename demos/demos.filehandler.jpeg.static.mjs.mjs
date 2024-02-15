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

import * as pkg from "../index.js";
const FileHandlerStatic = pkg.default.FileHandlerStatic;

const fs = new FileHandlerStatic();

(async () => {
  let tst = await fs.readFileStreaming("./demos/profile.jpeg", "binary");
  tst = tst;
  console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming("./demos/profile.jpeg", tst, "binary");
  console.log("written: ", written);
})();
