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

const { expect } = require('chai');
const { FileHandler, FileHandlerStatic } = require('../index').default;

describe('[request tests] Tests to check jpeg image using filehandler instance', () => {
  let tst, written;

  before(() => { });

  after(() => { });

  it('should read and write with the binary as stored in the demos folder', async () => {
    const fs = new FileHandler("./demos/profile.jpeg", 'binary');
    let tst = await fs.readFileStreaming();
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming(tst);
    // console.log("written: ", written);
    let expected = true;
    expect(!!written).to.equal(expected);
  });

  it('should read and write size equal size to be license as stored in the demos folder', async () => {
    const fs = new FileHandler("./demos/profile.jpeg", 'binary');
    let tst = await fs.readFileStreaming();
    let tstlen = tst.length;
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming(tst);
    // console.log("written: ", written);
    let expected = true;

    expect(!!written).to.equal(expected);
    // expect(tst instanceof Buffer).to.equal(expected);
  });

});
