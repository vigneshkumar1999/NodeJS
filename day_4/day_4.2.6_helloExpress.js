const express = require('express');
const path = require('path');
const users = require('../data/users');
const moment = require('moment');

const app = express();
const PORT = 5001;

// create a logger middleware
    const logger = (req, res, next) => {
          console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format() } `)
        next();
    }

// init middleware
app.use(logger);

// gets all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// gets a single user
app.get('/api/users/:id', (req, res) => {
    let found = users.some(user => user.id === parseInt(req.params.id))
    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member with the id of ${req.params.id} found!`})
    }
});


// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result
