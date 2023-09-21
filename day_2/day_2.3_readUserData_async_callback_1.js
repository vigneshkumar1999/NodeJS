const fs = require('fs')

// object to hold our data
let dataObject = {};

// read users data from file, when done call the callback
fs.readFile(
    "../data/users.json",
    "utf-8",
    (err, text) => {
        if (err) {
            // if there was an error, display a warning, but continue
            console.warn("Could not read data file:", err);
        } else {
            // Otherwise, parse the file contents and assign to the object
            Object.assign(dataObject, JSON.parse(text));
        }
        console.log(dataObject);
    }
);

//----------------------------------using async/await -----------------------------
//  Should import const fs=require('fs').promises 
// async function func(){
//     try{
//         let data=await fs.readFile( "../data/users.json",
//         "utf-8")
//         Object.assign(dataObject,JSON.parse(data));
//         console.log(dataObject)
//     }
//     catch(err){
//         console.log('Error Occured')
//     }
// }
// func();
// the main thread
console.log("The main thread...");

// As next steps
// 1. Read about JSON.parse() and JSON.stringify() and code some examples.

