// example: node ./day_6.4_cmdline.js '{"id": 10, "date": "1980-01-31"}'

// read command line arguments

// let query = process.argv[2];
// let queryObject = JSON.parse(query);
// // log query object
// console.log(queryObject);

// // log query object id
// console.log(queryObject.id);

// // extract keys from query object
// let keys = Object.keys(queryObject);
// // log keys
// console.log(keys);

// // extract values from query object
// let values = Object.values(queryObject);
// // log values
// console.log(values);


// Inputs
// node ./day_6.4_cmdline.js '{""yob"": 1977,""city"":""delhi"",""gender"":""M""}'
// node ./day_6.4_cmdline.js '{""city"": ""pune""}'
// node ./day_6.4_cmdline.js '{""city"": ""Del""}'
// node ./day_6.4_cmdline.js '{""city"": ""delhix"",""state"":""delhix""}'
//----------------------using terminal input--------------------------------
const sqlite3=require("sqlite3").verbose();
const path=require("path")

// Input read from command prompt
 let query = process.argv[2] ;
//convert to JSON Object
let queryObject = JSON.parse(query);
console.log(queryObject)

const searchKey = Object.keys(queryObject); 
 const searchValue = Object.values(queryObject); 
 
 //Starting database
 const db=new sqlite3.Database("../data/subscribers.db",sqlite3.OPEN_READONLY, // open db in read-only mode
(err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('...connected to Subscribes Databse...');
})
console.log(searchKey);
let condition="";
const values=[];
for(let i=0;i<searchKey.length;i++){
  condition+=searchKey[i];
  condition+=" ";
  condition+="like ? "
  values.push("%"+searchValue[i]+"%")
  if(searchKey.length>1&&i<searchKey.length-1){condition+="and "}
}
console.log(condition);
// single column
let sql =`SELECT * FROM subscriberData WHERE ${condition}`

db.all(sql, values, (err, track) => {
  if (err) {
    console.error(err.message);
    return;
  }

  if (track.length === 0) {
    console.log('No such records found.');
  } else {
    console.log('Search results:', track);
  }

  db.close();
})

// ------------------------------------implement using express.js----------------------

// const sqlite3=require("sqlite3")
// const express=require("express")

// const app=express()
// const port=5001;

// const db=new sqlite3.Database("../data/subscribers.db",
// sqlite3.OPEN_READONLY,
// (err)=>{
//   if(err){
//     console.log(err.message)
//   }
//   else{
//     console.log(".............Connected to Subscribers Database......................")
//   }
// })

// app.use('/',(req,res)=>{
//   if(Object.keys(req.query).length===0){
//    return  res.status(400).json({error:"No params exist"})
//   }
//   const searchKey = Object.keys(req.query); 
//   const searchValue=Object.values(req.query)

//   let condition="";
//   const values=[];
//   for(let i=0;i<searchKey.length;i++){
//     condition+=searchKey[i];
//     condition+=" ";
//     condition+="like ? "
//     values.push("%"+searchValue[i]+"%")
//     if(searchKey.length>1&&i<searchKey.length-1){condition+="and "}
//   }
//   let sql=`SELECT * FROM subscriberData WHERE ${condition}`

//   db.all(sql, values, (err,track) => {
//   if (err) {
//     res.status(500).json({error:"Db conn err"});
//   }

//   if ((track).length===0) {
//     res.status(404).json({error:"No Records exist"})
//   } else {
//     res.status(200).json(track);
//   }


// })
// })
// app.listen(port,(err)=>{
//   if(err){
//     console.log(err.message);
//   }
//   else{
//     console.log(`Connected to port :${port}`)
//   }
// })
