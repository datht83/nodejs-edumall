var fs = require("fs");

// doc file dong bo
var content = fs.readFileSync(__dirname + "/readme.txt", "utf8");
console.log(content);

// doc file bat dong bo
fs.readFile(__dirname + "/readme.txt",'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});
// neu ko truyen dinh dang ma tra ve buffer
fs.readFile(__dirname + "/readme.txt", (err, data) => {
    if(err) throw err;
    console.log(data);
});
console.log("Done");