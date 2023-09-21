/*
 * Request handlers
 */

const lodash = require('lodash');
const colors = require('colors');
const moment = require('moment');

// Define the handlers
var handlers = {};

// Container for subscriber sub-methods
handlers.root_method = {};
handlers.api_subscribers_method = {};
handlers.api_subscribers_count_method = {};

// root handler
handlers.root = function (data, shake) {
  let acceptableMethods = ["get"];
  let method = data.method.toLowerCase();
  console.log(
    moment().format().yellow,
    `Inside root handler for: ${data.method}`
  );

  if (acceptableMethods.indexOf(method) > -1) {
    handlers.root_method[method](data, shake);
  } else {
    shake(405);
  }
};

// root get sub-method
handlers.root_method.get = (data, shake) => {
  let response = {
    message: "Welcome to root.",
    payload: data.payload,
    queryStringObject: data.queryStringObject
  }
  shake(200, response);
}

// api/subscribers handler
handlers.api_subscribers = function (data, bake) {
  let acceptableMethods = ["get"];
  let method = data.method.toLowerCase();
  console.log(
    moment().format().yellow,
    `Inside api/subscribers handler for: ${data.method}`
  );

  if (acceptableMethods.indexOf(method) > -1) {
    handlers.api_subscribers_method[method](data, bake);
  } else {
    bake(405);
  }
};

// api/subscribers/count handler
handlers.api_subscribers_count = function (data, bake) {
  let acceptableMethods = ["get"];
  let method = data.method.toLowerCase();
  console.log(
    moment().format().yellow,
    `Inside api/subscribers/count handler for: ${data.method}`
  );

  if (acceptableMethods.indexOf(method) > -1) {
    handlers.api_subscribers_count_method[method](data, bake);
  } else {
    bake(405);
  }
};

// api subscribers sub-method
handlers.api_subscribers_method.get = (data, bake) => {
  let response = {
    message: "Welcome to api/subscribers",
    payload: data.payload,
    queryStringObject: data.queryStringObject
  }
  bake(200, response);
}

// api subscribers sub-method
handlers.api_subscribers_count_method.get = (data, bake) => {
  let queryString = JSON.stringify(data.queryStringObject);
  console.log(queryString);
  
  let subscriberList = lodash.filter(data.subscriberList, data.queryStringObject);
  
  let response = {
    message: `Subscriber count: ${subscriberList.length.toLocaleString()}`,
    payload: data.payload,
    queryStringObject: data.queryStringObject
  }
  bake(200, response);
}


// Not found handler
handlers.notFound = function (data, mangoshake) {
  // Not Found Handler : Callback with code 404 status code
  mangoshake(404, { message: "Not Found" });
};

// Export the module
module.exports = handlers;
