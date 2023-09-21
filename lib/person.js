/*
*   Person class
*/
class Person {

    constructor(id, name, dob) {
        this.id = id;
        this.name = name;
        this.dob = new Date(dob);
        this.data="Data of Person class"
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getIdName() {
        return `${this.id} ${this.name}`;
    }
}


class Class1{

    constructor(name,num,country){
        this.name=name;
        this.num=num;
        this.country=country
        this.data="Data of Class1"
    }

    getName(){
        return this.name;
    }
    getNum(){
        return this.num;
    }
    getCountry(){
        return this.country
    }
}
module.exports={Person,Class1}