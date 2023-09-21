# Day 7

## Screen sharing
Covering the assignments as from Day 6...
- Raghvendra Kumar shared the screen. He was able to debug the code and fix the issue for Assignment 1 and 2.
- Rajaram Mohanty shared the screen. He was able to debug Assignment 2.
- Ravi Kumar shared the screen. He was able to debug Assignment 1 and 2.
- Poojita Gupta shared the screen. She was able to debug Assignment 1 and 2.
- Kirti Goel shared the screen. She was able to debug Assignment 1 and 2.
- Navya R shared the screen. She was able to debug Assignment 1 and 2.
- Gayathri Maddi shared the screen. She was able to debug Assignment 1 and 2.
- Vighneshkumar shared the screen. He was able to debug Assignment 1 and 2.
- Parisha Tyagi shared the screen. She was able to debug Assignment 1 and 2.
- Anjali Sahu shared the screen. She was able to debug Assignment 1.

### Assignment 1
- Debug code listing `day_6.2_Chinook_1.js`, why is the variable composer not working?

### Assignment 2
- 2.1. Read code listing `day_6.4_cmdline.js` and fetch the data from the subscribers db located in the database `../data/subscribers.db` using the command line arguments as the query parameters. Please implement and test the edge cases as well.

- 2.2. Once above is done then feel free to implement the same using express.js and test it using postman. But in this case keep attention on modularity and code reusability.


Key takeways -  

- Command line arguments and differences in the OSs need to be looked into and kept in mind.


## 11 - Error Handling and Debugging

`How to handle errors, implement proper error handling techniques, and debug Node.js applications using built-in tools and third-party debuggers.`

Error handling is an essential aspect of programming, including in Node.js. It involves the process of dealing with any unexpected or exceptional behavior that might occur in a program. Effective error handling not only helps in identifying and fixing issues but also enhances the overall user experience.

In Node.js, there are several basics that you should be familiar with when it comes to handling errors. Here are some key points:

### Handling Synchronous Errors
#### Try and Catch
- To handle synchronous errors, you can use try-catch blocks. The code within the try block is executed, and if an error occurs, it gets caught in the catch block where you can handle it appropriately.
Consider...
- `day_3.8_readPersonData_async-await.js`
- `day_7.1_error_try-catch.js`
- `day_7.2_error_throw_try-catch.js`

### Handling Asynchronous Errors
#### Error-First Callback Pattern
- When dealing with asynchronous operations like callbacks or promises in Node.js, you can utilize the error-first callback pattern. Here, the first argument of the callback is reserved for any error that might occur during the operation. By convention, this value is checked, and if it exists, it indicates an error and should be handled accordingly.
Consider...
- `day_2.3_readUserData_async_callback_1.js`
- `day_3.7_readPersonData_promise.js`
- `day_7.3_error_callback.js`
#### Promisify Pattern
Also consider the `promisify` approach as in
- `day_7.5_error_callback_promisify.js`
- `day_7.6_error_async-await_promisify.js`


### Using Console
- The console object provides various methods like console.log(), console.error(), etc., which allow you to print information, including error messages, to the console. This can help in quickly identifying issues during development.

### Using Debugger
- Node.js has a built-in debugger that allows you to pause the execution of your code at specific breakpoints, inspect variables, and step through the code to identify and troubleshoot errors. You can use the `node inspect` command to start the built-in debugger.

- To use the built-in debugger, start your application with the command `node inspect [your script]`. This will open a debug console where you can set breakpoints by adding `debugger` statements in your code. Execution will pause at these breakpoints, allowing you to inspect variables, step through the code, and analyze the program flow.
- Execute inspect on the file `day_7.4_debugger.js` as follows:
```bash
$ node inspect ./day_7.4_debugger.js
```
- Once in the debugger set watch on `totalOrders` and `i` as you step through the code.
```
debug> watch('totalOrders')
debug> watch('i')
debug> n
```

### Node Inspector
- To use the Node.js Inspector, start your application with the command `node --inspect [your script]`. This will start the inspector and print a URL. Open that URL in Chrome to access the debugger interface similar to Chrome DevTools. Here, you can set breakpoints, step through code, inspect variables, analyze memory usage, and more.

In summary, error handling in Node.js involves properly handling synchronous and asynchronous errors, using the Error object effectively, and employing techniques such as logging, graceful failure, error handling middleware, and error codes/messages. Built-in tools like the console, debugger, and Node.js Inspector, along with third-party debuggers like Visual Studio Code and WebStorm, can be utilized to effectively debug Node.js applications at various levels of complexity.

## Assignment
### How can you use Event Emitters for handling errors in Node.js?
How will you use event emitters when you encouter an error in reading data from a csv file or when
a wrong query is sent to a database?

### How to extend the Error class to handle errors?
How will you extend the Error class to handle errors in your application and add more attributes to the
error object?

### How about nosediving into command line arguments?
Please spend good amount of time with command line arguments and try to use them to get data from database/csv/json etc files and how can you use event emitters and extended error objects for the cases when data is found and also when the data is not found or a wrong query is sent to the data source.