/*
* functions
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
* 1. functions are a set of statements that perform a task or calculate a value
* 2. functions are reusable
* 3. functions are objects
* 4. functions are first class objects
* 5. functions can be assigned to variables
* 6. functions can be passed as arguments to other functions
* 7. functions can be returned from other functions
* 8. functions can be anonymous
* 9. functions can be immediately invoked
* 10. functions can be used to create a function that returns a function
*/
function addNums_1(a, b) {
    return a + b;
}

addNums_1(1, 2);
console.log(addNums(1, 2));

addNums_1();
console.log(addNums_1());

addNums_1(1);
console.log(addNums_1());


/*
* default parameters
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
* 1. default parameters are parameters that take a default value if no argument is passed or if undefined is passed
* 2. default parameters are used to implement optional parameters
* 3. default parameters are evaluated at call time
* 4. default parameters can be functions
* 5. default parameters can be used to create a function that returns a function
*/
function addNums(a = 0, b = 0) {
    return a + b;
}

// console.log(addNums(1, 2));
console.log("------------------");
console.log(addNums());
console.log("------------------");
console.log(addNums(1));


/*
* simple arrow function
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* 1. arrow functions are a shorter syntax for writing function expressions
* 2. arrow functions do not have their own this, arguments, super, or new.target
* 3. arrow functions are always anonymous
* 4. arrow functions cannot be used as constructors
* 5. ...
*/
let addNums_2 = (a, b) => {
    return a + b;
}

console.log(addNums_2(1, 2));

console.log(addNums_2());

// OR if only single line of code

let addNums_3 = (a, b) => a + b;

console.log(addNums_3(1, 2));

console.log(addNums_3());

// let us move on to the next file: day_1.7.1_oop_es5.js
