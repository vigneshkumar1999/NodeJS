const uuid = require('uuid')

/*
*   User class
*/
class User {

    constructor(name, dob) {
        this.id = uuid.v4();
        this.name = name;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getIdName() {
        return `${this.id} ${this.name}`;
    }

    getUser() {
        return this
    }
}

module.exports = {
    User
}
