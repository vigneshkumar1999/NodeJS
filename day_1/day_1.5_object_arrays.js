/* 
* objects
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
* 1. Objects are variables that hold multiple values
* 2. Objects can hold multiple data types
* 3. Objects can be declared using {} or new Object()
* 4. Objects are key value pairs
* 5. Objects are mutable
* 6. Objects can be nested
* 7. Objects have methods
*/

// the array of good foods
const good_foods = [
  { name: "asparagus", type: "vegetables", top_producers: ["China", "Peru", "Mexico"], nutrition: { calories: 20, fat: 0.1, carbs: 3.88, protein: 2.2 } },
  { name: "milk", type: "dairy", top_producers: ["USA", "India", "China"], nutrition: { calories: 42, fat: 2.4, carbs: 4.7, protein: 3.4 } },
  { name: "broccoli", type: "vegetables", top_producers: ["China", "India", "USA"], nutrition: { calories: 34, fat: 0.4, carbs: 6.64, protein: 2.82 } },
  { name: "carrots", type: "vegetables", top_producers: ["China", "Uzbekistan", "Russia"], nutrition: { calories: 41, fat: 0.2, carbs: 9.58, protein: 0.93 } },
  { name: "eggs", type: "dairy", top_producers: ["China", "USA", "India"], nutrition: { calories: 155, fat: 10.6, carbs: 1.1, protein: 12.6 } },
];

/*
* check type of object
*/
console.log(typeof good_foods);

/*
* check length of object
*/
console.log(good_foods.length);

/*
* check if object is an array
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
* 1. isArray method determines whether the passed value is an Array
* 2. isArray method returns true if the value is an Array, otherwise false
*/
console.log(Array.isArray(good_foods));

/*
* filter method
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
* 1. filter method creates a new array with all elements that pass the test implemented by the provided function
* 2. filter method does not change the original array
* 3. filter method takes a function as an argument
* 4. filter method takes an optional argument of thisArg
* 5. filter method returns a new array
* 6. filter method does not execute the function for array elements without values
*/
let vegetables = good_foods.filter(food => food.type === "vegetables");
console.log(vegetables);

vegetables = good_foods.filter(
  (function theFunc(food) {
    return food.type === "vegetables"
  }
  ));

console.log(vegetables);

/*
* sort method
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* 1. sort method sorts the elements of an array in place and returns the array
* 2. sort method sorts the elements of an array in ascending order
* 3. sort method converts elements into strings and compares strings
* 4. sort method takes an optional argument of compareFunction
* 5. sort method takes an optional argument of thisArg
* 6. sort method returns the sorted array
*/
let sorted_foods = good_foods.sort((a, b) => a.name.localeCompare(b.name));
console.log("-------------------");
console.log(sorted_foods);

/*
* convert to json
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
* 1. JSON.stringify method converts a JavaScript object or value to a JSON string
* 2. JSON.stringify method takes an optional argument of replacer
* 3. JSON.stringify method takes an optional argument of space
* 4. JSON.stringify method returns a JSON string
*/
let json_foods = JSON.stringify(good_foods);
console.log("-------------------");
console.log(json_foods);

/*
* for loop on good_foods
*/
for (let i = 0; i < good_foods.length; i++) {
  console.log(good_foods[i]);
}

/*
* while loop on good_foods
*/
let i = 0;
while (i < good_foods.length) {
  console.log(good_foods[i]);
  i++;
}

/*
* for of loop on good_foods
*/
console.log("-------------------");
for (let food of good_foods) {
  console.log(food);
}

/*
* forEach loop on good_foods
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
* 1. forEach method executes a provided function once for each array element
* 2. forEach method does not return anything
* 3. forEach method takes a function as an argument
* 4. forEach method takes an optional argument of thisArg
*/
good_foods.forEach(
  (food) => {
    console.log(food);
  }
);

/*
* map method
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
* 1. map method creates a new array populated with the results of calling a provided function on every element in the calling array
* 2. map method does not change the original array
* 3. map method takes a function as an argument
* 4. map method takes an optional argument of thisArg
* 5. map method returns a new array
* 6. map method does not execute the function for array elements without values
*/
let food_names = good_foods.map(food => food.name);
console.log("-------------------");
console.log(food_names);


/*
* cascasding map and filter
*/
let top_vegetable_producers = good_foods
  .filter(food => food.type === "vegetables")
  .map(food => food.top_producers);
console.log("-------------------");
console.log(top_vegetable_producers);


/*
 * == vs ===
  * Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
  * 1. == compares two values for equality, after converting both values to a common type
  * 2. === compares two values for equality, without type conversion
  * 3. == and === are both comparison operators
  * 4. == and === both return a boolean
  */
const x = 1;
const y = "1";

console.log(x == y);
console.log(x === y);

/*
* comparing strings
*/
const a = "a";
const d = "d";
const c = "c";
const alpha = "c"

console.log("-------------------");

console.log(a < c);
console.log(a > d);

console.log(a === alpha);

console.log(a > alpha);
console.log(a < alpha);

// console.log(c > alpha);
// console.log(c < alpha);
// console.log(c == alpha);
// console.log(c === alpha);

console.log("-------------------");
console.log("hello" == "HELLO");
console.log("hello" === "Hello");

// const string_1 = "hello";
// const string_2 = "world";
// const string_3 = "hello world";

// console.log(string_1.toLowerCase() === string_2.toLowerCase());
// console.log(string_1.toLowerCase() === string_3.toLowerCase());
// console.log(
//   string_1.toLowerCase()
//   .concat(" ")
//   .concat(string_2.toLowerCase()) === string_3.toLowerCase()
//   );

/*
* comparing objects
*/
const obj_1 = { name: "James" };
const obj_2 = { name: "James" };
const obj_3 = obj_1;

console.log("-------------------");
console.log(obj_1 === obj_2); //why is this false?
console.log(obj_1 == obj_2); //why is this false?
console.log(obj_1 === obj_3); //why is this true?
console.log(obj_3 == obj_2); //why is this false?

/*
* ternary operator
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
* 1. ternary operator is the only JavaScript operator that takes three operands
* 2. ternary operator is a conditional operator
* 3. ternary operator is a short hand for if else statement
* 4. ternary operator returns a value
*/
const age = 17;
const can_vote = age >= 18 ? "yes" : "no";
console.log(can_vote);

/*
* switch statement
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
* 1. switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case
* 2. switch statement is a conditional statement
* 3. switch statement is a short hand for if else statement
* 4. switch statement returns a value
*/
const day = "Monday";
let day_type;

switch (day) {
  case "Monday":
    day_type = "weekday";
    break;
  case "Tuesday":
    day_type = "weekday";
    break;
  case "Wednesday":
    day_type = "weekday";
    break;
  case "Thursday":
    day_type = "weekday";
    break;
  case "Friday":
    day_type = "weekday";
    break;
  case "Saturday":
    day_type = "weekend";
    break;
  case "Sunday":
    day_type = "weekend";
    break;
  default:
    day_type = "invalid day";
}

console.log(day_type);

// // let us move on to day_1.6_functions.js
