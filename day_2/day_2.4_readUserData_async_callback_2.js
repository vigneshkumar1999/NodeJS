const fs = require("fs");

// object to hold data
let usersData = {};

// the callback function
function callback(err, text) {
    if (err) {
        // if there was an error, display a warning, but continue
        console.warn("Could not read data file:", err);
    } else {
        // otherwise, parse the file contents and assign to the object
        Object.assign(usersData, JSON.parse(text));
    }
    console.log(usersData);
}

// read users data from file, when done call the callback
fs.readFile(
    "../data/users.json",
    "utf-8",
    callback
);

// the main thread
console.log("The main thread...");

