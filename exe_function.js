var first_name = 'Khang';
// cac bien co scope ben trong than ham
(function(last_name){
	var first_name = 'Dat';
	console.log(first_name);
	console.log(last_name);
}('Huynh'))

console.log(first_name);