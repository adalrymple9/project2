var express = require("express");
var exphbs = require("express-handlebars");
var db = require('./models');

var app = express();
var port = process.env.PORT || 3000;


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/public", express.static("public"));

app.get('/', function(req, res) {
    res.render('trip');
});
var data = {
    days: [{
        day: 1,
        trips: [{
        	location: 'miami',
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }, {
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }, {
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }]
    },
    {
        day: 2,
        trips: [{
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }, {
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }, {
            imgage: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg'
        }]
    }],
    layout: false
};
app.post('/currentday', function(req, res){
	console.log({ data: data, layout: false});
	res.render('partials/listDays', data);
});
app.get('/days', function(req, res) {
	db.Trip.findOne({where: {id:1}}).then(function(trip){
		res.json(trip);
		// res.render('partials/listDays', data);
	});
});
app.get('/venuesList', function(req, res){
    res.render('partials/venues',{layout: false});
});
db.sequelize.sync({force: true});
app.listen(port, function() {
    console.log('server running');
})