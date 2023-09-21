const express = require('express')
const router = express.Router()
const users = require('../../../data/users')
const { User } = require('../../../lib/user')
const lodash = require('lodash')
const url=require('url')
// gets users
// what we dont see is /api/users in the route
router.get('/', (req, res) => {

   console.log(req.query)
   //variables declaration
   const id='id';
   const name='name';
   const dob='dob';
   let results=null;
   const parsedUrl = req.originalUrl;
   let paramString = parsedUrl.split('?')[1];
   let params_arr = paramString.split('&');
   let keyNotFound=false
   const keyArray=[];

   //Find keys in users and stores in keyArray
for(let i=0;i<=0;i++){
   for(var j in users[0]){
      keyArray.push(j);
   }
}
//Check if the parameter is present in keyArray
  params_arr.map((params)=>{
   if(keyArray.includes((params.split('=')[0]))===false){
      keyNotFound=true
   }
  })
    // Bug 1 (attempt to fix)
       // Handle case when a request comes in with an id that does not exist in the data.
    // Bug 2 (attempt to fix)
       // Do type checking of the inputs received.
    // Bug 3 (attempt to fix)
       // Handle the case when non-existing parameters are sent in req query.
    // Bug 4
       // Why are we case sensitive?

  //if parameter is not found then return the response
if(keyNotFound){
   return res.status(400).json({ error: 'parameter not found in users' });
}

   //parameter is present
else{

   //check id related issues
   if(id in req.query){

      // Checking the format
      if (isNaN(req.query.id) || parseInt(req.query.id)<= 0) {
         return res.status(400).json({ error: 'Wrong Id Format' });
       }

      //  format is correct then check id is present or not
       results = lodash.find(users, {id:parseInt(req.query.id)});
       console.log(results)
         if (!results) {
            return res.status(404).json({ error: 'Id not found' });
               }
   }

   //check name related issues
   else if(name in req.query){

      // Checking the format
      if(!isNaN(req.query.name)){
         return res.status(400).json({ error: 'wrong name format' });
      }

      //  format is correct then check name is present or not
      results = lodash.find(users, req.query);
      if (!results) {
      return res.status(404).json({ error: 'name not found' });
    }
   }

   //check dob related issues
   else if(dob in req.query){

      // Checking the format
      let data = (req.query.dob).split("-");
      if(data.length!==3){
         return res.status(400).json({ error: 'Wrong dob format' });
      }
      if (data.length===3) {
         if(isNaN(data[0])||(data[0].length!=4)){
            return res.status(400).json({ error: 'Wrong year format' });
         }
         if(isNaN(data[1])||(data[1].length!=2)){
            return res.status(400).json({ error: 'Wrong month format' });
         }
         if(isNaN(data[0])||(data[2].length!=2)){
            return res.status(400).json({ error: 'Wrong date format' });
         }
     }

     //  format is correct then check dob is present or not
      results = lodash.find(users, req.query);
      if (!results) {
      return res.status(404).json({ error: 'dob not found' });
    }
   }
    res.json(results);
}
   
});

// gets a single user
// what we dont see is /api/users in the route
router.get('/:id', (req, res) => {
    let found = users.some(user => user.id === parseInt(req.params.id))
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }
    else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
});

// create a user
router.post('/', (req, res) => {
    let data = req.body

    let newUser = new User(data.name, data.dob)

    users.push(newUser)

    console.log(users.slice(-1)[0]) // read what we are doing here with slice and -1

    res.send(newUser)

    // Bug 1
       // Type check for name
    // Bug 2
       // Type check for dob
    // Bug 3
       // Check for presence of name
    // Bug 4
       // Check for empty name
});


module.exports = router


// Bug 1 (attempt to fox)
       // Handle case when a request comes in with an id that does not exist in the data.
    // Bug 2 (attempt to fox)
       // Do type checking of the inputs received.
    // Bug 3 (attempt to fox)
       // Handle the case when non-existing parameters are sent in req query.
    // Bug 4
       // Why are we case sensitive?