function readDatabase (callback){
    // read done
    var user = {
        name: "Mai Hoa"
    }
    callback(user);
}

// yeu cau truy van
readDatabase(function(data){
    console.log("Read done callback");
    console.log("Data: ", data);
})

// noi khac
readDatabase(function(data) {
    console.log("Read done callback 2 !");
    console.log("Data: ", data.name);
})