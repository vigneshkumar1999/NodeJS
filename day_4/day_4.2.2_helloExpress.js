const express = require('express');

const app = express();
const PORT = 5001;

// create a root route
app.get('/', (req, res) => {
    // first we send text to the browser
    // res.send('Hello Express!');

    // then we send html to the browser
    // res.send('<h1>Hello Express!</h1>');

    // then we send json to the browser
    // res.send({ message: 'Hello Express!' });

    // then we send an html file to the browser
    res.sendFile(__dirname + '/index.html');
}
);

// create a about route
app.get('/about', (req, res) => {
    // we send a file to the browser
    res.sendFile(__dirname + '/about.html');
}
);

// start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// go to localhost:5001 in browser to see the result
// use thunderbird to make the calls and see the result
