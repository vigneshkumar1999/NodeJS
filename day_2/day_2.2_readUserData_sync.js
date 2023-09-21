const fs = require("fs");
// object to hold data
let dataObject = {};

// read the data file
let data = fs.readFileSync("../data/users.json", "utf-8");

// assing the data to the dataObject and disply it
Object.assign(dataObject, JSON.parse(data));
console.log(dataObject);

// the main thread
console.log("The main thread...");

// As next step
// 1. Read about the fs module and code some examples.