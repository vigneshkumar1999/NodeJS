/*
*   constructor function
*/
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

/*
* instantiate object
*/
let person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);

let person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2);

/*
* date class in js
*/
const today = new Date();
console.log(today);

/*
* main functions of date class
*/
let val;

val = today.getMonth(); // 0 based
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay(); // 0 based
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);

val = today.getMinutes();
console.log(val);

val = today.getSeconds();
console.log(val);


/*
*   constructor function, methods added
*/
function PersonA(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/*
* instantiate object
*/
person1 = new PersonA('John', 'Doe', '4-3-1980');
person2 = new PersonA('Mary', 'Smith', '3-6-1970');

console.log(person1.getFullName());
console.log(person2.getBirthYear());

/*
* list of persons
*/
let people = [person1, person2];

for(let person of people) {
    console.log(person.getFullName());
}

console.log(person1)


/*
*   constructor function, methods added to prototype
*/
function PersonB(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

PersonB.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

PersonB.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

/*
* instantiate object
*/
person1 = new PersonB('John', 'Doe', '4-3-1980');
person2 = new PersonB('Mary', 'Smith', '3-6-1970');

console.log(person1.getFullName());
console.log(person2.getBirthYear());

/*
* list of persons
*/
people = [person1, person2];

for(let person of people) {
    console.log(person.getFullName());
}

console.log(person1)

// let us move on to day_1.7.2_oop_es6.js
