var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/bigfile.txt", {
    encoding: "utf8",
    highWaterMark : 32 * 1024 // max moi chunk co 32kb
});

var writeable = fs.createWriteStream(__dirname + "/file_copy.txt");

readable.on("data", (chunk) => {
    console.log(chunk.length);
    // doc noi dung va copy noi dung filesang 1 file khac 
    writeable.write(chunk);
})