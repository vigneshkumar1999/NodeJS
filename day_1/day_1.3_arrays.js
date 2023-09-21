/* 
* arrays
* Reference material: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* 1. Arrays are variables that hold multiple values
* 2. Arrays can hold multiple data types
* 3. Arrays can be declared using [] or new Array()
* 4. Arrays are zero indexed
* 5. Arrays are mutable
* 6. Arrays can be nested
* 7. Arrays have methods
*/

// string array
const fruits = ["apples", "oranges", "pears"];
console.log(fruits);
// mixed array
const mixedArray = new Array("apples", 10, true, null, undefined, { a: 1, b: 2 }, new Date());
console.log(mixedArray);

// access using index
console.log(fruits[0]);

// arrays are mutable
fruits[0] = "bananas";
console.log(fruits);

// arrays can be nested
const nestedArray = [
    ["apples", "oranges", "pears"],
    ["bananas", "mangoes", "grapes"],
    ["strawberries", "blueberries", "blackberries"]
];
console.log(nestedArray);
console.log(nestedArray[1][2]);
console.log(nestedArray[2]);

// add element to the end
fruits.push("grapes");
fruits.push("mangoes");
console.log(fruits);
nestedArray.push(["cranberries", "wildberries", "abredberries"]);
console.log(nestedArray);
nestedArray[3].push("pineapples");
console.log(nestedArray);

// add element to the beginning
fruits.unshift("strawberries");
console.log(fruits);
nestedArray.unshift(["cocunut", "jackfruit", "applewood"]);
console.log(nestedArray[0]);
console.log(nestedArray[1]);

// pop element from the end
fruits.pop();
console.log(fruits);

// check if array
console.log(Array.isArray(fruits));

// find index
console.log(fruits.indexOf("oranges"));

/*
* spread operator
*/

// use case 1 - copy array / the right way to copy an array
const fruitsCopy = [...fruits];
console.log(fruitsCopy);
fruits.push("pineapples");
console.log(fruits);
console.log(fruitsCopy)


// use case 2 - merge arrays
const vegetables = ["carrots", "cabbage", "broccoli"];
const fruitsAndVegetables = [...fruits, ...vegetables];
console.log(fruitsAndVegetables);

// use case 3 - pass arguments to functions
const addNumbers = (a, b, c) => {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(addNumbers(...numbers));

/*
* flat method
*/
const nestedArray2 = [
    ["apples", "oranges", "pears"],
    ["bananas", "mangoes", "grapes"],
    ["strawberries", "blueberries", "blackberries"]
];
console.log(nestedArray2.flat());

const nestedArray3 = [
    ["apples", "oranges", "pears", ["hello", "world"]],
    ["bananas", "mangoes", "grapes"],
    ["strawberries", "blueberries", "blackberries"]
];
console.log(nestedArray3.flat());
console.log(nestedArray3.flat(2));

/*
* flatMap method
*/
const nestedArray4 = [
    ["apples", "oranges", "pears"],
    ["bananas", "mangoes", "grapes"],
    ["strawberries", "blueberries", "blackberries"]
];
console.log(nestedArray4.flatMap(fruit => fruit + "s"));

const nestedArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(nestedArray5.flatMap(number => number * 2));
console.log(nestedArray5.flatMap(number => addNumbers(...number) * 2));

/*
* keys method
*/
const nestedArray6 = nestedArray5.flatMap(number => addNumbers(...number) * 2);
console.log(...nestedArray6.keys());

/*
* values method
*/
console.log(...nestedArray6.values());

/*
* entries method
*/
console.log(...nestedArray6.entries());

const inventory = [
    { name: "asparagus", category: "vegetables", quantity: 5 },
    { name: "bananas", category: "fruit", quantity: 0 },
    { name: "goat", category: "meat", quantity: 23 },
    { name: "cherries", category: "fruit", quantity: 5 },
    { name: "fish", category: "meat", quantity: 22 },
    { name: "jackfuit", category: "vegetables", quantity: 5 },
];

/*
* filter method
*/
let fruitsInventory = inventory.filter(
    (item) => {
        console.log(item);
        // item.type === "fruit"
        return item.category === "fruit";
    }
);
console.log(fruitsInventory);

/*
* filter method
*/
fruitsInventory = inventory.filter(item => item.category === "fruit");
console.log(fruitsInventory);

/*
* group by type
*/
const groupByCategory = inventory.reduce(
    (bag, item) => {
        if (item.category in bag) {
            bag[item.category].push(item);
            return bag;
        }
        else {
            bag[item.category] = [item];
            return bag;
        }
    }, {});
console.log("--------------------");
console.log(groupByCategory);

/*
* remaining methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* to be explored on your own
*/

// let us move on to day_1.4_objects.js
