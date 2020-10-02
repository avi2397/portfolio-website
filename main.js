var express = require('express');
var app = express();
var bodyparser = require('body-parser');
//var mongoose = require("mongoose");

//mongoose.connect("mongodb://localhost/Data");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var globalname="";


app.post("/", function(req, res){
	if(req.body.agentcheck) globalname = "Agent";
	else globalname = req.body.visitor;
	res.redirect("/home");
});

app.get("/", function(req, res){
	res.render("name");
});

app.get("/home", function(req, res){
	res.render("home", {name: globalname});
});


app.get("/contact", function(req, res){
	res.render("contact");
});

app.get("/about", function(req, res){
	res.render("about");
});



app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("server started");
});  


	