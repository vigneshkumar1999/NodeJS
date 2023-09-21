const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('/path/to/file.txt')
  .then((data) => {
    console.log(data);
  })
  .catch(err => console.log(err));
