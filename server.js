var express = require("express");
var exphbs = require("express-handlebars");


var app = express();
var port = process.env.PORT || 3000;


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use("/public", express.static("public"));

app.get('/', function(req, res){
	res.render('home');
});

app.listen(port, function(){
	console.log('server running');
});