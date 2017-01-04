var buffer = new Buffer("Xin chào", 'utf8');
// from v6.0
//var buffer2 = Buffer.from("Xin chào", 'utf8');
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toString('ascii'));
console.log(buffer.toJSON());

console.log(buffer[2]);

buffer.write("Hoa"); //ghi đè lên buffer từ index = 0
console.log(buffer.toString()); // print : Hoa chào