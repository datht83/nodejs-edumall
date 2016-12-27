'use strict';

var EvenEmitter = require("events");

module.exports = class Dialog extends EvenEmitter{
    constructor(){
        super();
        this.message = "Hello world !";   
    }
    
    sayHello(data){
        console.log(`${this.message}: ${data}`);
        this.emit("hello", data);
    }
}
