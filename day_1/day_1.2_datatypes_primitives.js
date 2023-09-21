/* primitive data types
 1. String, Numbers, Boolean, null, undefined
 2. We deliberately leave out symbol, will catch up later
*/
console.log("--- primitive data types ---")
const aString = "John Doe";
const aNumber = 10;
const aDecimal = 10.5;
const aBoolean = true;

const aNull = null;

const aUndefined = undefined;
let aVariable;


/* typeof operator
    1. typeof operator returns the datatype of the variable
    2. typeof operator returns a string
*/
console.log(aString, ", aString datatype -> ", typeof aString);
console.log(aNumber, " aNumber datatype -> ", typeof aNumber);
console.log(aDecimal, " aDecimal datatype -> ", typeof aDecimal);
console.log(aBoolean, " aBoolean datatype -> ", typeof aBoolean);
console.log(aNull, " aNull datatype -> ", typeof aNull); // null is an object, discuss this
console.log(aUndefined, " aUndefined datatype -> ", typeof aUndefined);
console.log(aVariable, " aVariable datatype -> ", typeof aVariable);

/* null vs undefined
    1. null is an empty object, value
    2. undefined is a type
    3. null is assigned
    4. undefined is not assigned
*/    
console.log("--- null vs undefined using == ---")
console.log(aUndefined == aNull); // only values are compared, true

console.log("--- null vs undefined using === ---")
console.log(aUndefined === aNull); // values and types are compared, false

console.log(aUndefined === aVariable); // values and types are compared, true

// let us move to day_1.3_arrays.js
