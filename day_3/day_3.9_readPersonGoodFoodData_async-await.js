const fs = require("fs");
const { Person } = require('../lib/person');

// define data file path
const usersDataPath = "../data/users.json";
const goodFoodDataPath = "../data/good_foods.json";

// object to hold data
let persons = [];

// read users data from file, using promises
function readPersonData(usersDataPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            usersDataPath,
            "utf-8",
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    // otherwise, parse the file contents and assign to the object
                    console.log('readPersonData')
                    resolve(data);
                    
                }
            }
        );
    }
    )
}

// read good food data data from file, using promises
function readGoodFoodData(goodFoodDataPath) {
    return new Promise((resolve, reject) => {
        fs.readFile(
            goodFoodDataPath,
            "utf-8",
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    // otherwise, parse the file contents and assign to the object
                    console.log('readGoodFoodData')
                    resolve(data);
                }
            }
        );
    }
    )
}

// function to do something
function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!");
        }, 1000);
    });
}


async function readPersonGoodFoodDataAsync(usersDataPath, goodFoodDataPath) {
    try {
        let goodFoodData = await readGoodFoodData(goodFoodDataPath);
        let usersData = await readPersonData(usersDataPath);
        let something = await doSomething();

        usersData = JSON.parse(usersData);
        goodFoodData = JSON.parse(goodFoodData);
        // print do something result
        console.log(something);

        // create array of Person objects
        for (let user of usersData) {
            let person = new Person(user.id, user.name, user.dob);
            persons.push(person);
        }
        // print out the persons array of objects
        for (let person of persons) {
            console.log(person.getIdName(), person.getBirthYear());
        }

        // print out the good food data
        console.log(goodFoodData);

    } catch (err) {
        console.log("Error:", err);
    }
}


// the main thread
readPersonGoodFoodDataAsync(usersDataPath, goodFoodDataPath);
console.log("The main thread continues...");

