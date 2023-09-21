const fs = require("fs");
const { Person } = require('../lib/person');

// define data file path
const usersDataPath = "../data/users.json";

// object to hold data
let usersData = {};
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
                    resolve(data);
                }
            }
        );
    }
    )
}

// execute the readPersonData function
readPersonData(usersDataPath)
    .then((data) => {
        usersData = JSON.parse(data);
        
        // create array of Person objects
        for (let user of usersData) {
            let person = new Person(user.id, user.name, user.dob);
            persons.push(person);
        }
        // print out the array
        for (let person of persons) {
            console.log(person.getIdName(), person.getBirthYear());
        }
    })
    .catch((err) => {
        console.log("Error:", err);
    });


// the main thread
console.log("The main thread continues...");


// What can we say about person module by looking at this code?
// 1. Has 2 methods - getIdName and getBirthYear
// 2. Has attributes - id, name, birthDate

