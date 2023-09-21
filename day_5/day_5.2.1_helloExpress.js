const express = require('express');
const path = require('path');
const moment = require('moment');


const app = express();
const PORT = 5001;

// create a logger middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// use logger middleware
app.use(logger);

// use body parser middleware
app.use(express.json())

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// set the router
app.use('/api/users', require('./routes/apis/users'))

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result

// Assignment 1:
// 1. Please review the bugs as noted in routes/apis/users.js
// 2. Attempt to fix Bug 1, 2, 3 for GET api on / route
//      these are marked as (attempt to fix).


// Assignment 2:
// 1. Please create test collections in Thunder Client or Postman
// 2. Kindly focus on simple test cases as our goal is to be able to
//     learn automation of meaningful test cases in most effieicent manner.

// Assignment 0:
// 1. Again go through the code we have written and
//    a. Visit Express.js website and study
//          request and response objects.


// Remember to revisit...
// 1. Why mocha test cases was not failing? This one is on Rahul.