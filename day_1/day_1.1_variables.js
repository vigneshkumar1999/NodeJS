/* basic console methods
1. log
2. error
3. warn
*/
console.log("--- log, error, warn methods ---")
console.log("Hello JavaScript!, updated")
console.error("This is an error!, updated")
console.warn("This is a warning!, updated")

/* variables in javascript
 1. var, let, const
 2. var is globally scoped, can be reassigned and redeclared, not to be used
 3. let, const are block scoped, cannot be redeclared, let can be reassigned
*/

/* using let
1. let is block scoped
2. let can be reassigned
3. let cannot be redeclared
*/
console.log("--- using let ---")
let age = 30;
console.log("defined let age: ", age);
age = 32;
console.log("reassigned age: ", age);

/* using const
1. const is block scoped
2. const cannot be reassigned
3. const cannot be redeclared
*/
console.log("--- using const ---")
const value = 100;
console.log("defined const value: ", value);
// value = 101;
// console.log(value);

/* when to use let and const 
1. let when you want to reassign
2. const when you don't want to reassign
*/

// let us move to running using node in terminal

// let us explore quokka.js

// let us play with string...use quokka

// define a string
let aString = "John Doe";
let aNumber = 30;


// concatenation using + operator
console.log("--- concatenation old way ---")
console.log("My name is " + aString + " and I am " + aNumber + " years old.");

// concatenation using template literals
console.log("--- concatenation new way ---")
console.log(`My name is ${aString} and I am ${aNumber} years old.`);

// string methods
console.log("--- string methods ---")
let aNewString = `My name is ${aString} and I am ${aNumber} years old.`;
// aNewString = "abraca dabra";
console.log(`string -> ${aNewString}`);


// length
console.log(`string length: ${aString.length}`);
// substring
console.log(`substring: ${aString.substring(0, 4)}`);

// let us move-on to day_1.2_datatypes_primitives.js
