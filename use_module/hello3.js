function Person(){
    this.message = "Hello nodejs !!!";
    this.sayHello = function(){
        console.log(this.message);
    }
}
module.exports = new Person();