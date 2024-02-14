/**
 * 
 * Package: stream-fs
 * Author: Ganesh B
 * Description: Read and Write files in files using streaming
 * Install: npm i stream-fs --save
 * Github: https://github.com/ganeshkbhat/filehandler
 * npmjs Link: https://www.npmjs.com/package/stream-fs
 * File: index.js
 * File Description: Read and Write files in files using streaming
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');
const { FileHandler, FileHandlerStatic } = require('../index').default;

describe('[request tests] Tests to ', () => {
  let tst, written;

  before(() => { });

  after(() => { });

  it('should respond with the text to be license as stored in the demos folder', async () => {
    const fs = new FileHandler("./demos/demos.test.txt");
    let tst = await fs.readFileStreaming();
    tst = tst.toString(fs.encoding);
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming(tst);
    // console.log("written: ", written);
    let actual = tst.split("\r\n").join("\n");
    let expected = `MIT License

Copyright (c) 2024 Krishnamurthy G B

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`.split("\r\n").join("\n");
    expect(actual).to.equal(expected);
  });

  it('should respond with the text of equal size to be license as stored in the demos folder', async () => {
    const fs = new FileHandler("./demos/demos.test.txt");
    let tst = await fs.readFileStreaming();
    tst = tst.toString(fs.encoding);
    // console.log("read: \n\n", tst);
    let written = await fs.writeFileStreaming(tst);
    // console.log("written: ", written);
    let actual = tst.split("\r\n").join("\n").length;
    let expected = `MIT License

Copyright (c) 2024 Krishnamurthy G B

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`.split("\r\n").join("\n").length;

    expect(actual).to.equal(expected);
  });

});
