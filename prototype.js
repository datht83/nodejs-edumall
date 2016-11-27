function Person(name, password){
	this.name = name;
	this.password = password;
}

Person.prototype.getName = function () {
	return this.name;
}
Person.prototype.getPassword = function () {
	return this.password;
}
Person.prototype.getLevel = function(){
	return this.level;
}
Person.prototype.level = 'admin';
function User(name){
	this.name = name;
}

User.prototype = new Person();

var person = new Person('ti', '123');
var user = new User('teo', '456');

console.log(user.getName());
console.log(user.getLevel());
console.log(user.getPassword());// undefined: thuoc tinh password ko duoc ke thua qua prototype

console.log(person.getName());

// mo rong doi tuong san co
Date.prototype.vnFormat = function(){
	var yyyy = this.getFullYear();
	var mm = this.getMonth() + 1;
	var dd = this.getDate();
	return dd + '/' + mm + '/' + yyyy;
}
var now = new Date();
var xms = new Date(2016, 11,25);
console.log(now.vnFormat());
console.log(xms.vnFormat());