// import dependencies
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const csv = require('csv-parser');
const moment = require('moment');

// import handlers
const handlers = require('../lib/handlers');

// define the subscriber data csv file
const subscriberDataCSVFilename = "../data/subscriberData.csv";
const subscriberList = [];

// define the router
const router = {
  "": handlers.root,
  "api/subscribers": handlers.api_subscribers,
  "api/subscribers/count": handlers.api_subscribers_count,
};

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
          moment().format().yellow,
          `Subscriber records loaded... ${subscriberList.length.toLocaleString()} records read from ${subscriberDataCSVFilename}`
        );
        resolve(subscriberList);
      })
  });
}

// create the server
const server = http.createServer(async (req, res) => {
  // some people start coding here to handle the request and response
  // but I prefer to use a function to handle the request and response
  unifiedServer(req, res);
});

// method to create the server and handle requests
let unifiedServer = async function (req, res) {
  // console.log(req)
  let parsedURL = url.parse(req.url, true);
  // console.log(parsedURL)
  let queryStringObject = parsedURL.query;
  let path = parsedURL.pathname;
  let trimmedPath = path.replace(/^\/+|\/+$/g, "");
  let method = req.method;

  let stringDecoder = new StringDecoder("utf-8");
  let buffer = "";

  // we read the request payload here
  await req.on("data", function (data) {
    buffer += stringDecoder.write(data);
    console.log(`buffer: ${buffer}`)
  });

  await req.on("end", function (data) {
    buffer += stringDecoder.end();
  });

  // set the buffer to a default value if it is empty
  buffer = buffer.length > 0 ? buffer : '{"message":"no payload"}';
  console.log(`buffer: ${buffer}`)

  // choose the handler this request should go to
  // if one is not found, use the notFound handler
  let chosenHandler =
    typeof router[trimmedPath] !== "undefined"
      ? router[trimmedPath]
      : handlers.notFound;

  // display the chosen handler
  console.log(`chosenHandler: ${chosenHandler}`)

  let data = {
    subscriberList: subscriberList,
    trimmedPath: trimmedPath,
    method: method,
    queryStringObject: queryStringObject,
    payload: JSON.parse(buffer)
  };

  // console.log(`trimmed path: ${trimmedPath}`)
  // console.log(`method: ${method}`)
  // console.log(`queryStringObject: ${JSON.stringify(queryStringObject)}`)
  // console.log(`payload: ${JSON.stringify(data.payload)}`)

  chosenHandler(data, (statusCode, payload) => {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(payload));
  });

}

async function startServer(port) {
  try {
    await readSubscriberDataCSVFile();
    server.listen(
      port,
      () => console.log(`Server listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }

}

startServer(5001);
