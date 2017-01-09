var express = require("express");
var cookiesParser = require("cookie-parser");
var app = express();
var port = 3000;
// middleware : nam truoc route

// static la middleware cho phep quan li file tinh
app.use("/assets", express.static(__dirname + "/public"));
// use cookie-parser
app.use(cookiesParser());
// set template engine
app.set("view engine", "ejs");

//custom middleware
app.use("/", function(req, res, next) {
    console.log("Request URL: ", req.url);
    req.requestTime = new Date();
    next(); // tiep tuc toi 1 middleware khac
});

// other
/*
app.get("/", function(req, res){
	console.log("Cookies: ", req.cookies);
	res.send(`
				<link href="/assets/style.css" rel="stylesheet" type="text/css">
				<h1>Hello Express</h1>
				<p>Request time: ${req.requestTime} </p>
			`); // su dung thong tin tu middleware o tren
});
*/
app.get("/", function(req, res) {
	res.render("index");
});

app.get("/api", function(req, res) {
    res.json({
        firstName: "Mai",
        lastName: "Hoa"
    });
});

// /user/123
/*
app.get("/user/:id", function(req, res) {
    //set cookie while response
    res.cookie("username", req.params.id);
    res.send(`<h1>User: ${req.params.id} </h1>`);
});
*/
app.get("/user/:id", function(req, res) {
    res.render("user", {ID: req.params.id});
});
app.listen(port, function() {
    console.log("Servre is listening on Port : ", port);
});
