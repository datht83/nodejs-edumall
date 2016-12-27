'use strict';

class Person{
    constructor(firstname, lastName){
        this.firstname = firstname;
        this.lastName = lastName;
    }
    //dn function
    sayHello(){
        console.log("Hello " + this.firstname + " " + this.lastName);
    }
}

var hoa = new Person("Hoa", "Mai");
hoa.sayHello();
// show instance from
console.log(hoa.__proto__);