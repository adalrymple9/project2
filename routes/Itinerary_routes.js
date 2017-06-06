var db = require("../models");

module.exports = function(app) {
//looking for a user
	app.get("/users", function(req, res) {
		db.Users.findOne({}).then(function(userData) {
			res.render("index", {username: userData});
		});
	});
// Display the user's trips
	app.get("/users/trips", function(req, res) {
		db.Trips.findAll({}).then(function(userTrips) {
			res.render("index", {trip_name: userTrips});
		});
	});
// add a new trip
	app.post("users/trips/new-trip", function(req, res) {
		db.Trips.create({
			trip_name: req.body.trip_name,
			start_date: req.body.start_date,
			trip_length: req.body.trip_length
			// Determine with the team if we need any more values for the table.
		}).then(function(newTripInfo) {
			res.redirect("/users");
		});
	});

// delete trip. Do we have this functionality yet? Will we use it?

	app.delete("user/trips/remove-trip", function(req, res) {
		db.Trips.destroy({
			where: {
				id: req.params.id
				// make sure this information is listed in the html for queries
			}
		}).then(function(removeTrip) {
			res.redirect("/users");
		});
	});

// Display days in a trip
	app.get("users/trips/daily-schedule", function(req, res) {
		db.daily_schedule.findAll()
	});


}


 // Verify with Mark which views are best for each request
 // Suggest that, for the sake of simplicity, we stick with only 1-7 days OR research how to do an OR query in sequelize