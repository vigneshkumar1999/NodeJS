const express = require('express');
const path = require('path');

const app = express();
const PORT = 5001;

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result
