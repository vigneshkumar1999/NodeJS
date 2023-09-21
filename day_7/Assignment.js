// // ---------------------------------------Assignment 1----------------------------------------------
// const EventEmitter=require('events');
// const fs=require('fs')

// class class1 extends EventEmitter{
//     readFile(path){
//         fs.readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 this.emit('error',err);
//             }
//             else{
//                 this.emit('details',data)
//             }
//         })
//     }
// }

// const obj=new class1();

// obj.on('error',(err)=>{
//     console.log(err);
// })
// obj.on('details',(data)=>{
//     console.log(data);
// })
// obj.readFile("../data/data.csv")


// ------------------------------------------------Assignment -2--------------------------------------------

// const fs = require('fs');

// class CustomError extends Error {
//   constructor(message, code) {
//     super(message);
//     this.name = 'CustomError'; // Explicitly set the error name
//     this.code = code;
//     this.timestamp = new Date();
//   }
// }

// fs.readFile("../data/data1.csv", 'utf8', (err, data) => {
//   if (err) {
//     const obj=new CustomError('File not found','Err_code');
//     console.log('\n')
//     console.log("Custom Error Details")
//     // console.log('\n')
//     console.log(`${obj.name}-${obj.message}`);
//     console.log(`Error Code : ${obj.code}`);
//     console.log(`TimeStamp: ${obj.timestamp}`)
//     console.log('\n')
//     console.log('Original Error Details')
//     // console.log('\n')
//     console.log('Original Error',err)
//   } else {
//     console.log(data);
//   }
// });

// ------------------------------------Assignment-3---------------------------------------------

const sqlite3=require("sqlite3").verbose();
const path=require("path")
const EventEmitter=require('events')
const eventEmitter=new EventEmitter()
// Input read from command prompt
 let query = process.argv[2] ;
//convert to JSON Object
let queryObject = JSON.parse(query);
// console.log(queryObject)

const searchKey = Object.keys(queryObject); 
 const searchValue = Object.values(queryObject); 
 
 //Starting database
 const db=new sqlite3.Database("../data/subscribers.db",sqlite3.OPEN_READONLY, // open db in read-only mode
(err) => {
  if (err) {
    console.error(err.message);
  }
  else{console.log('...connected to Subscribes Databse...')};
})

let condition="";
const values=[];
for(let i=0;i<searchKey.length;i++){
  condition+=searchKey[i];
  condition+=" ";
  condition+="like ? "
  values.push("%"+searchValue[i]+"%")
  if(searchKey.length>1&&i<searchKey.length-1){condition+="and "}
}

let sql =`SELECT * FROM subscriberData WHERE ${condition}`

db.all(sql, values, (err, track) => {
  if (err) {
    eventEmitter.emit('listener',err.message);      
    return 
  }

  if (track.length === 0) {
    eventEmitter.emit('listener',"No record exist");
  } else {
    eventEmitter.emit('listener',track)
  }
})

eventEmitter.on('listener',(arg)=>{
    console.log(arg)
})
// node .\Assignment.js '{""age"": 23}'   ---no such column exist
// node .\Assignment.js '{""city"": ""mysore""}'  ----no record exist
//  node .\Assignment.js '{""city"": ""delhi""}'-----record exist
