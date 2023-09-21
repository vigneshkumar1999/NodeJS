const express = require('express');
const path = require('path');
const users = require('../data/users');

const app = express();
const PORT = 5001;

// gets all users
app.get('/api/users', (req, res) => {
    res.json(users);
});


// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result
