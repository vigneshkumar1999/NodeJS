const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

(async function callReadFile() {
  try {
    const result = await readFile('/path/to/file.txt');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();