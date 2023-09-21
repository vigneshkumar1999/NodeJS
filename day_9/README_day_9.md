# Day 9

## Screen sharing
Covering the assignments as from Day 8...
- Rajaram Mohanty shared the screen and covered the assignment. Needs debugging and fixing.

Key takeways -  
- To be decided...

### Assignment from Day 8
#### Please implement a very simple REST API in Node.js which can do the following:
- GET /subscribers - returns a list of subscribers.
  - Handles query parameters like city, state, gender, dataset.
- Implement cluster module to handle multiple requests.


## 14. Security Best Practices
```Highlight common security vulnerabilities in Node.js applications and provide guidelines on how to secure the application by implementing authentication, input validation, and safe coding practices.```

Node.js applications can be vulnerable to various security risks if proper precautions are not taken. Here, we will discuss some common security vulnerabilities in Node.js applications and provide guidelines on how to secure the application by implementing authentication, input validation, and safe coding practices.

#### 1. Injection attacks
Injection attacks occur when untrusted user input is sent to a Node.js application without proper validation or sanitization. This can result in malicious code being executed on the server. To prevent injection attacks, always validate and sanitize user input before using it in any database queries, system commands, or template rendering. Implementing parameterized queries and using security libraries like Sequelize or Knex can help in preventing these attacks.

#### 2. Cross-Site Scripting (XSS)
XSS attacks take place when user-controlled data is displayed on web pages without proper escaping or validation. This can allow attackers to inject malicious scripts into the application, potentially compromising user data. Implement output encoding for user-generated content, sanitize user input, and set appropriate security headers like Content Security Policy (CSP) to mitigate XSS vulnerabilities.

#### 3. Cross-Site Request Forgery (CSRF)
CSRF attacks occur when a malicious website tricks a user into performing unintended actions on another website where the user is authenticated. To prevent CSRF attacks, generate and validate unique anti-CSRF tokens for each user session. These tokens can be included in forms, AJAX requests, or headers (like X-Requested-With) to ensure requests are made only from trusted sources.

#### 4. Insecure Deserialization
Insecure deserialization vulnerabilities can allow attackers to execute arbitrary code by manipulating serialized data sent to the application. Avoid accepting serialized data from untrusted sources and validate the integrity of serialized objects before deserializing them. Implement libraries like `secure_serialize` or `serialize-javascript` that provide additional security measures during deserialization.

#### 5. Insecure dependencies
Node.js applications often rely on external packages or modules from libraries. However, using outdated or vulnerable versions of these dependencies can expose the application to security vulnerabilities. Regularly update dependencies and monitor for any security advisories or patches. Tools like npm audit or third-party services like Snyk or npm security can help detect and fix vulnerable dependencies.

Now let's discuss guidelines on how to secure the application by implementing authentication, input validation, and safe coding practices.

#### 1. Authentication
- Implement secure authentication mechanisms like password hashing with a strong algorithm and unique per-user salt. Use libraries such as bcrypt or argon2 for secure password hashing.
- Enforce the use of strong and unique passwords for user accounts.
- Implement session management with secure session cookies and protect against session fixation attacks.
- Consider using two-factor authentication to add an additional layer of security.

#### 2. Input Validation
- Validate and sanitize all user input to prevent injection attacks and other vulnerabilities.
- Utilize libraries such as Joi, express-validator, or validator.js for input validation and sanitization.
- Apply input validation across all layers of the application, including user inputs from forms, query parameters, JSON payloads, and user-controlled URLs.

#### 3. Safe Coding Practices
- Follow the principle of least privilege, granting only necessary permissions to resources and actions.
- Implement secure coding practices, such as proper error handling, safe handling of user data, and use of secure data encryption/decryption algorithms.
- Regularly audit and fix code vulnerabilities, prod dependencies, and configuration issues.
- Utilize security tools like ESLint with security-specific plugins to catch potential security issues during development.
- Conduct regular security assessments, code reviews, and penetration testing to identify and address any security weaknesses.

By following these guidelines and implementing authentication, input validation, and safe coding practices, you can significantly enhance the security of your Node.js application and protect it from potential security vulnerabilities.

## 15. Performance Optimization
```Share techniques for optimizing the performance of Node.js applications, including caching, profiling, and minimizing resource usage.```

Optimizing the performance of Node.js applications is crucial for ensuring efficient and reliable execution. There are several techniques you can use to enhance the performance of your Node.js applications, including caching, profiling, and minimizing resource usage.

Additionally, there are several important packages that can aid in performance optimization in Node.js.

### 1. Caching
Caching is a technique used to store frequently accessed data in memory to reduce the need for repeated computations or database queries. This can significantly improve the performance of your Node.js application. Some important caching packages in Node.js are:

- Redis: A popular in-memory database that can be used as a cache in Node.js applications.
- Node-cache: A simple and easy-to-use caching library that provides in-memory key-value storage.

### 2. Profiling
Profiling allows you to identify performance bottlenecks in your Node.js application. By analyzing the profiling data, you can optimize specific areas that require improvement. Node.js provides a built-in profiling module called `v8-profiler`. Here's how you can use it:

a. Install the `v8-profiler` package using npm:
```bash
npm install v8-profiler
```

b. Require the `v8-profiler` module in your Node.js application:
```javascript
const v8 = require('v8-profiler');
```

c. Start profiling by creating a new profiler instance:
```javascript
const profiler = new v8.Profiler();
profiler.startProfiling('profileName');
```

d. Perform the operations you want to profile in your Node.js application.

e. Stop profiling and retrieve the collected data:
```javascript
const profileData = profiler.stopProfiling('profileName');
```

f. Analyze the `profileData` to identify the performance bottlenecks in your application.

### 3. Minimizing Resource Usage
To optimize the resource usage of your Node.js application, you can utilize various techniques like asynchronous programming, using appropriate data structures, and optimizing database queries. Some packages that can aid in minimizing resource usage are:
- async: A powerful package that provides various control flow functions to handle asynchronous operations efficiently.
- lodash: A utility library that offers optimized functions for handling arrays, objects, and other data structures effectively.

By implementing caching, profiling, and minimizing resource usage techniques, along with utilizing appropriate packages, you can significantly improve the performance of your Node.js applications.'


## 16. Supplementary Tools and Libraries
```Introduce additional tools and libraries commonly used in Node.js development, such as Socket.io for real-time applications, Passport.js for authentication, and Winston for logging.```

### User Authentication
User authentication involves verifying the identity of a user and ensuring they have the necessary permissions to access certain resources or perform specific actions within an application.
      
User authentication typically involves the following steps:

#### 1. Registration
Users create an account by providing their credentials, such as a username and password. This information is stored securely in a database.
      
#### 2. Login
Once registered, users can authenticate themselves by providing their credentials. The provided credentials are compared against the stored credentials to verify the user's identity.
      
#### 3. Session Management
After successful authentication, a session is established to maintain the user's state across subsequent requests. A session typically involves generating a unique session ID, which is stored on the server and associated with the user's authenticated session.
      
#### 4. Authorization
Once authenticated, the application can determine what actions or resources the user is authorized to access based on their assigned roles or permissions.
      
Now, let's explore some ways to implement user authentication in Node.js applications:
      
#### 1. Purely Application-Based Authentication
In this approach, authentication logic is implemented directly within the Node.js application. This can be done by storing user credentials in the application's database and implementing custom authentication logic using libraries like bcrypt for password hashing and comparison.
      
#### 2. Using Frameworks
There are several frameworks that provide built-in authentication functionality for Node.js applications. For example, Express.js offers Passport.js, a popular authentication middleware that supports a variety of authentication strategies like local username/password, social login (Google, Facebook, etc.), and more.
      
#### 3. JSON Web Tokens (JWT)
JWT is a popular method for authentication in modern web applications. It involves generating a token upon successful authentication and including it in subsequent requests. The server can then verify the token, extract user information, and authenticate the user based on its contents. Libraries like jsonwebtoken or passport-jwt can be used to implement JWT authentication in Node.js applications.
      
#### 4. Social Login
Integrating social login providers like Google, Facebook, or Twitter allows users to authenticate using their existing social media accounts. There are various libraries, such as passport-google-oauth, passport-facebook, and passport-twitter, that simplify the integration process.
      
Several packages can facilitate user authentication in Node.js applications. Some popular ones include:
      
- bcrypt: A library for password hashing and comparison.
- passport: A widely used authentication middleware providing authentication strategies and session management.
- jsonwebtoken: A library for generating and verifying JSON Web Tokens.
- passport-jwt: A Passport strategy that supports JWT authentication.
- passport-local: A Passport strategy for username and password-based authentication.
- passport-google-oauth, passport-facebook, passport-twitter: Passport strategies for social login with Google, Facebook, and Twitter, respectively.
      
Remember, when implementing user authentication, it's crucial to follow best practices, such as using strong password hashing algorithms, properly securing sensitive data, and regularly updating dependencies to address security vulnerabilities.

### Message Oriented Middleware (MOM Pattern)
MOM is a software architectural pattern that enables communication between different applications or components through the exchange of messages.
      
- One of the popular message-oriented middleware frameworks for Node.js is RabbitMQ. RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP). It provides features like publish/subscribe, routing, guaranteed message delivery, and support for various messaging patterns. RabbitMQ is highly scalable and can handle high-volume, real-time data exchange efficiently.
      
- Another popular framework is Apache Kafka, which is a distributed streaming platform. Kafka is designed for high-throughput, fault-tolerant, real-time data streaming. It provides a messaging system with durability, scalability, and strong ordering guarantees. Kafka is often used in scenarios that demand large-scale data processing and real-time analytics.


## Assignment
### Please think of an assignment with focus on...
#### 1. Node.js and express.js for api development.
#### 2. Decent size of dataset (at least 50,000 records).
#### 3. Loggging via event emitter.
#### 4. API security using JWT.
#### 5. Assignment documentation using markdown.
#### 6. Testing via postman/thunderclient.
#### 7. Error handling and recovery.

#### The time allotted should be no more than 2.5 days.
#### On Wed, 16/Aug/2023 by 10 am individual statements of assignments should be submitted.
#### Sample assignment statement (you are not permitted to copy this assignment):
```
REST APIs for user management, which allow reading, creating users from a dataset, support parameter based queries, security via jwt, logging using event emitter, and error handling. Documnentation using markdown. Testing via postman/thunderclient.
```

Topic:Basic User Login System

Data:Dataset with 50k user details

APIs:1.login API
     2.Resgister API
     3.Update particular user's information
     4.Make user inactive 
     5.Get user details API

API security:Role based authentication using JWT

Testing:Using postman

Documentation through markdown
