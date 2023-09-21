const fs = require('fs');
const csv = require('csv-parser');
const moment = require('moment');
const express = require('express');
const path = require('path')

const subscriberDataCSVFilename = "../data/subscriberData.csv";
const subscriberList = [];
const PORT = 5001;

const app = express();

// create a logger middleware
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

// init middleware
app.use(logger);

// set a static folder
app.use(express.static(path.join(__dirname, 'public')));

// function to read the subscriber data csv file
async function readSubscriberDataCSVFile() {
    return new Promise((resolve, reject) => {
        let stream = fs.createReadStream(subscriberDataCSVFilename)
        stream.on('error', (error) => {
            console.log("datafile stream error!");
            reject(error);
        });
        stream
            .pipe(csv())
            .on('data', (data) => subscriberList.push(data))
            .on('end', () => {
                // Display number of subscriber records read from the data file.
                console.log(
                    moment().format(),
                    `Subscriber records loaded... ${subscriberList.length.toLocaleString()} records read from ${subscriberDataCSVFilename}`
                );
                resolve(subscriberList);
            })
    });
}

// method to start the server
async function startServer() {
    try {
        await readSubscriberDataCSVFile();
        app.listen(PORT, () => console.log(moment().format(), `Listening on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
}

// start the server
startServer();

