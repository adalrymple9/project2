var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var db = require("./models");
var app = express();
var port = process.env.PORT || 3000;


app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



app.use("/public", express.static("public"));

app.get('/', function(req, res){
	res.render('trip');
});

db.sequelize.sync({ force: false}).then(function() {
	app.listen(PORT, function() {
	  console.log("App listening on PORT " + PORT);
	});
});