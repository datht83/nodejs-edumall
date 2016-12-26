function Person(){
    this.message = "hello nodejs !!!!";
    this.sayHello = function(){
        console.log(this.message);
    }
}
module.exports = Person;