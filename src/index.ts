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

import { default as filehandler } from "./filehandler";

export { FileHandlerInterface, FileHandlerStaticInterface } from "./filehandler";

export default {
  FileHandler: filehandler.FileHandler, 
  FileHandlerStatic: filehandler.FileHandlerStatic
}
