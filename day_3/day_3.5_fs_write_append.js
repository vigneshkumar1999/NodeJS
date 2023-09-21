const fs = require('fs');
const path = require('path');

// write to file
fs.writeFile(
    path.join(__dirname, 'test.txt'),
    'Hello World!'+'\r\n',
    (err) => {
        if (err) throw err;

        console.log('File written to...');

        // append to file
        fs.appendFile(
            path.join(__dirname, 'test.txt'),
            'I love Node.js!',
            (err) => {
                if (err) throw err;
                console.log('File appended to...');
            });
    });
 
console.log('Data wriiten to .txt file')
// Assignment
// 1. Please write a program which will allow use to keep on appending to the 
//    file test.txt every time the user runs the program.

//-----------------------------ANSWER---------------------------

// fs.appendFile(
//     path.join(__dirname,'newText.txt'),
//     "Hello world"+"\r\n"+"I love NodeJs"+"\r\n",
//     (err)=>{
//         if(err) throw err;
//     }
//  )