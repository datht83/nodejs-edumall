// Ban dau ca 2 cung tham chieu den cung 1 vùng nhớ
exports = function(){
    console.log("hello nodejs !");
}
// exports sẽ tham chiếu đến 1 vùng nhớ khác chứa Obj Funtion
console.log(exports);
console.log(module.exports);
// in ra 2 kết quả khác nhau