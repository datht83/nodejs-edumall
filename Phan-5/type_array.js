var buffer = new ArrayBuffer(8); // mang 8 byte
var view = new Int32Array(buffer); // la 1 view của arraybuffer, Int32Array co 4 byte => chỉ có 2 phần tử
view[0] = 5;
view[1] = 10;
console.log(view);