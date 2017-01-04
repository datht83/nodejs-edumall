// ky thuat chuyen manh chunk tu readable stream sang writeable stream, tranh truong hop tran buffer do read nhanh hon write
var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/bigfile.txt", {
    encoding: "utf8",
    highWaterMark : 32 * 1024 // max moi chunk co 32kb
});

var writeable = fs.createWriteStream(__dirname + "/file_copy.txt");
var compressed = fs.createWriteStream(__dirname + "/file_copy.txt.gz");
var gzip = zlib.createGzip();

// copy
readable.pipe(writeable);

// compressed
readable.pipe(gzip).pipe(compressed);