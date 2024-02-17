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

describe('[request tests] Tests to check jpeg image using filehandler static usage', () => {
  let tst, written;

  before(() => { });

  after(() => { });

  it('should read and write with the binary as stored in the demos folder', async () => {
    // const fs = new FileHandlerStatic();
    const fs = FileHandlerStatic;
    let tst = await fs.readFileStreaming("./demos/profile.jpeg", "binary");
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming("./demos/profile.jpeg", tst, "binary");
    // console.log("written: ", written);
    let actual = tst;
    let expected = true;
    expect(!!written).to.equal(expected);
    expect(typeof actual).to.equal("string");
  });

  it('should respond with the binary of equal size to be license as stored in the demos folder', async () => {
    // const fs = new FileHandlerStatic();
    const fs = FileHandlerStatic;
    let tst = await fs.readFileStreaming("./demos/profile.jpeg", 'binary');
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming("./demos/profile.jpeg", tst, "binary");
    // console.log("written: ", written);
    let actual = tst.length;
    let expected = true;

    expect(written).to.equal(expected);
    expect(actual).to.equal(613945);
  });

});
