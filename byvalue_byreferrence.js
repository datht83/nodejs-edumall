function change_by_value(b){
	b = 2;
}
var a = 1;
change_by_value(a);
console.log(a); // 1

function change_by_reference(obj){
	obj.prop1 = function(){

	};
	obj.prop2 = {};
	obj.d = 100;
}

var c = {};
c.prop1 = {};
change_by_reference(c);
console.log(c); // { prop1: [Function], prop2: {}, d: 100 }