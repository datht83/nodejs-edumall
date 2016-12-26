var obj = {
    sayHello: "Hello"
}
// có thể gọi = các cách sau
console.log(obj.sayHello);
console.log(obj['sayHello']);

var prop = "sayHello";
console.log(obj[prop]);

// function va arr
var arr = [];
arr.push(function(){
    console.log("Hello Nodejs 1");
});
arr.push(function(){
    console.log("Hello Nodejs 2");
});arr.push(function(){
    console.log("Hello Nodejs 3");
});

arr[0]();
arr[1]();
arr[2]();
console.log("=====================");
// goi = for
arr.forEach(function(item){
    item();
});

// ke thua
var person = {
    firstName:"",
    lastName: "",
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}
var hoa = Object.create(person); // tao ra 1 obj ke thua tu person
hoa.firstName = "Hoa";
hoa.lastName = "Mai";
var yen = Object.create(person);
yen.firstName = "yen";
yen.lastName = "phuong";

console.log(hoa.getFullName());
console.log(yen.getFullName());