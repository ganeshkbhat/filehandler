# stream-fs filehandler
a simple interface and handler for streaming file handler using stream-fs filehandler package

The demos can be found in the folder [demos](https://github.com/ganeshkbhat/filehandler/tree/main/demos)

USAGE:
```
const filehandler = require("stream-fs").default;
const FileHandler = filehandler.FileHandler;
const fs = new FileHandler("./demos/demos.test.txt");
(async () => {
  let tst = await fs.readFileStreaming();
  tst = tst.toString(fs.options);
  console.log("read: \n\n", tst);
  let written = await fs.writeFileStreaming(tst);
  console.log("written: ", written);
})();
```
