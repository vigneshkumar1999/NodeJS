const path = require('path');

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// extension name
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// access the base name
console.log(path.parse(__filename).base);

// caoncatenate paths
console.log(path.join(__dirname, 'test', 'src', 'hello.html'));

// Assignment:
// 1. Run this file and add more code after going through the documentation.
