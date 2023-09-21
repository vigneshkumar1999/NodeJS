# Day 8

## Screen sharing
Covering the assignments as from Day 7...
- Raghvendra Kumar shared the screen and showed the assignments.
- Parisha Tyagi shared the screen and showed the assignments.
- Poojita Gupta shared the screen and showed the assignments.
- Rajaram Mohanty shared the screen and showed the assignments.
- Kirti Goel shared the screen and showed the assignments.
- Riya Mehra shared the screen and showed the assignments.
- Sharvan Kumar shared the screen and showed the assignments.
- Navya R shared the screen and showed the assignments.
- Vighneshkumar shared the screen and showed the assignments.
- Gayathri Maddi shared the screen and showed the assignments.

Key takeways -  
- To be decided...

### Assignment from Day 7
#### Assignment 1. How can you use Event Emitters for handling errors in Node.js?
How will you use event emitters when you encouter an error in reading data from a csv file or when
a wrong query is sent to a database?

#### Assignment 2. How to extend the Error class to handle errors?
How will you extend the Error class to handle errors in your application and add more attributes to the
error object?

#### Assignment 3. How about nosediving into command line arguments?
Please spend good amount of time with command line arguments and try to use them to get data from database/csv/json etc files and how can you use event emitters and extended error objects for the cases when data is found and also when the data is not found or a wrong query is sent to the data source.

## 12. Deployment and Scalability
`Discuss best practices for deploying and scaling Node.js applications, including hosting options, process management, and load balancing techniques.`

When deploying and scaling Node.js applications, there are several best practices that can greatly enhance performance, stability, and scalability. 

Let us delve into hosting options, process management, and load balancing techniques.
      
1. Hosting options
- Virtual Private Server (VPS): This option provides more control and flexibility. You can choose popular VPS providers like Linode, DigitalOcean, or AWS EC2 to set up and manage your own server for Node.js applications.
- Platform as a Service (PaaS): This option abstracts away server management, allowing you to focus solely on your application code. PaaS providers like Heroku, Google App Engine, or Microsoft Azure offer easy deployment and scalability options specifically tailored for Node.js applications.
- Serverless: This approach relieves the burden of managing servers entirely, as you deploy your code as functions that run only when triggered. Serverless platforms like AWS Lambda, Azure Functions, and Google Cloud Functions automatically scale based on demand.
      
2. Process management
- Process Managers: Use process managers like PM2, Forever, or Nodemon to monitor and manage your Node.js application processes. These tools can automatically restart the application if it crashes, manage logs, and provide insights into resource utilization.
- `Cluster Module: The built-in Cluster module in Node.js allows you to create a cluster of worker processes, each capable of handling requests. This enables better utilization of multi-core CPUs and improves performance by distributing the workload across multiple processes.`
- Some helpful links are
  - [Nodejs cluster module](https://nodejs.org/api/cluster.html)
  - [Cluster sample implementation](https://www.digitalocean.com/community/tutorials/how-to-scale-node-js-applications-with-clustering)
      
1. Load balancing techniques
- Reverse Proxy: Implement a reverse proxy server, such as Nginx or HAProxy, to act as an intermediary between client requests and your Node.js application servers. The reverse proxy can distribute incoming requests across multiple server instances, ensuring efficient load balancing.
- Load Balancers: Utilize load balancers such as AWS Elastic Load Balancer, NGINX Plus, or HAProxy Enterprise to evenly distribute incoming traffic across multiple instances of your Node.js application. These load balancers typically employ algorithms like Round Robin or Least Connections to optimize load distribution.
      
To scale your Node.js application effectively, you can combine these techniques -
- Deploy your application on multiple server instances or containers, either on a VPS, PaaS, or serverless platform.
- Use a process manager or the Cluster module to manage multiple Node.js processes on each server instance.
- Set up a reverse proxy or a load balancer to evenly distribute incoming traffic across those instances.
      
By following these best practices, you can ensure your Node.js applications are hosted optimally, easily managed, and highly scalable.


## 13. Quality Assurance
`Introduce different testing frameworks, such as Mocha or Jest, and demonstrate how to write unit tests and integration tests for Node.js applications.`

Unit testing, integration testing, and functional testing are three essential types of testing in software development. In Node.js, these testing types can be implemented using various tools and frameworks. Let's explore each of these testing types and the tools/packages commonly used in Node.js for testing.
      
1. Unit Testing

Unit testing is focused on testing individual units or components of code to ensure they work as expected. These units can be functions, methods, or classes. The goal is to isolate and test each unit independently, verifying if they produce the expected output for various inputs.
      
To write unit tests in Node.js, you can use the built-in assert module, which provides various assertions to check conditions. The assert module allows you to make assertions like checking equality, determining if a value is truthy or falsy, etc. With the assert module, you can write test cases that compare the expected and actual values to ensure the units are functioning correctly.
      
Example using the assert module:
      
```javascript
const assert = require('assert');
      
function add(a, b) {
  return a + b;
}
      
// Unit test for the add function
const result = add(2, 3);
assert.strictEqual(result, 5,”Addition failed');
```
      
2. Integration Testing

Integration testing evaluates how different components of an application work together or interact with each other. The goal is to check if the integrated parts function as expected when combined. In Node.js, integration testing involves testing the functionality of API endpoints, database connections, external services, etc.
      
To perform integration testing in Node.js, you can use various frameworks and testing libraries. One popular choice is Mocha, which provides a flexible framework for writing asynchronous tests. It offers hooks to perform setup and teardown actions, allowing you to define test suites and test cases effectively.
      
Example using Mocha:
      
```javascript
const assert = require('assert');
      
function add(a, b) {
  return a + b;
}
     
// Integration test for the add function
describe('Addition', function() {
   it('should return the correct sum', function() {
      const result = add(2, 3);
      assert.strictEqual(result, 5,”Addition failed');
  });
});
```
      
3. Functional Testing

Functional testing covers testing the application's behavior and features from the user's perspective. It focuses on testing user flows, simulating user interactions, and ensuring the system behaves as expected.

In Node.js, functional testing can be performed using frameworks like Mocha, combined with libraries like Chai, which provides expressive assertions for making the tests more readable. Chai offers different styles, such as assert, expect, and should, allowing you to choose the one that suits your preference.
      
Example using Mocha and Chai:
      
```javascript
const { expect } = require('chai');
      
function add(a, b) {
  return a + b;
}
      
// Functional test for the add function
describe('Addition', function() {
  it('should return the correct sum', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });
});
```


Code Coverage with Istanbul

For measuring the code coverage of Node.js applications, Istanbul is a widely-used tool. Istanbul helps identify how much of your codebase is covered by tests, giving insights into untested or insufficiently tested areas.
      
To use Istanbul for code coverage, you can utilize its command-line interface (CLI) or integrate it with testing frameworks like Mocha. Istanbul instruments the code and generates detailed coverage reports highlighting line-by-line execution information.

Example using Mocha and Istanbul:
      
```shell
$ ./node_modules/nyc/bin/nyc.js ./node_modules/mocha/bin/mocha.js ./test/day_8.1_addTest.js
$ ./node_modules/nyc/bin/nyc.js ./node_modules/mocha/bin/mocha.js ./test/indexTest.js
$ npm run test
$ npm run coverage
```

Some good links to refer to are as follows:
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Istanbul](https://istanbul.js.org/)

Important Packages for Testing in Node.js:
In addition to the built-in assert module, Mocha, Chai, and Istanbul, Node.js offers various other packages for testing purposes. Some important ones include:
      
- Sinon: A powerful library for creating test doubles (stubs, spies, mocks) that help with simulating dependencies, controlling time, and asserting function behavior.
- Supertest: A library for testing HTTP endpoints, making it easier to send HTTP requests and assert the responses received.
- Jest: A comprehensive testing framework that provides a seamless experience for unit, integration, and snapshot testing. Jest comes bundled with built-in assertions, mocking capabilities, and code coverage reports.
- Superagent: A feature-rich library that enables easier testing of HTTP calls by providing a high-level API to send requests and make assertions on the responses.
      
These packages provide additional features that enhance the testing capabilities for specific scenarios in Node.js applications.

## Assignment
### Please implement a very simple REST API in Node.js which can do the following:
- GET /subscribers - returns a list of subscribers.
  - Handles query parameters like city, state, gender, dataset.
- Implement cluster module to handle multiple requests.

