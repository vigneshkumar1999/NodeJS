const express = require('express');

const app = express();
const PORT = 5001;

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
