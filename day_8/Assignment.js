const sqlite3=require("sqlite3")
const express=require("express")
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const app=express()
const port=5007;

  const db=new sqlite3.Database("../data/subscribers.db",
sqlite3.OPEN_READONLY,
(err)=>{
  if(err){
    console.log(err.message)
  }
  else{
    console.log(".............Connected to Subscribers Database......................")
  }
})
    console.log(`Primary pid=${process.pid}`);
    app.get("/heavy", (req, res) => {
        let total = 0;
        for (let i = 0; i<5000000000; i++) {
          total++;
        }
        res.send(`The result of the CPU intensive task is ${total}\n`);
      });
    app.get('/',(req,res)=>{
        if(Object.keys(req.query).length===0){
         return  res.status(400).json({error:"No params exist"})
        }
        const searchKey = Object.keys(req.query); 
        const searchValue=Object.values(req.query)
      
        let condition="";
        const values=[];
        for(let i=0;i<searchKey.length;i++){
          condition+=searchKey[i];
          condition+=" ";
          condition+="like ? "
          values.push("%"+searchValue[i]+"%")
          if(searchKey.length>1&&i<searchKey.length-1){condition+="and "}
        }
        let sql=`SELECT * FROM subscriberData WHERE ${condition}`
      
        db.all(sql, values, (err,track) => {
        if (err) {
          res.status(500).json({error:"Db conn err"});
        }
      
        if ((track).length===0) {
          res.status(404).json({error:"No Records exist"})
        } else {
          res.status(200).json(track);
        }
      
      
      })
      })
      app.listen(port,(err)=>{
        if(err){
          console.log(err.message);
        }
        else{
          console.log(`Connected to port :${port}`)
        }
      })
