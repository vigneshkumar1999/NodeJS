const express = require('express')
const router = express.Router()
const users = require('../../../data/users');


// gets all users
// what we dont see is /api/users in the route
router.get('/', (req, res) => {
    res.json(users);
});

// gets a single user
// what we dont see is /api/users in the route
router.get('/:id', (req, res) => {
    let found = users.some(user => user.id === parseInt(req.params.id))

    if(found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
});

// create a user
router.post('/', (req, res) => {
    res.send(req.body);
});


module.exports = router