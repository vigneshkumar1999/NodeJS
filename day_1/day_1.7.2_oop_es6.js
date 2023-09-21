/*
*   Person class
*/
class Person {

    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

/*
* instantiate object
*/
let person1 = new Person('John', 'Doe', '4-3-1980');
let person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person1);
console.log(person2);


people = [person1, person2];

for (let person of people) {
    console.log(person.getFullName(), person.getBirthYear());
}

