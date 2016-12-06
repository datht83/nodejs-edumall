var greeting = require("./greeting.json"); // require da load chuoi json va convert thanh object

var sayHello = function(){
    console.log(greeting.en);
}
module.exports = sayHello;