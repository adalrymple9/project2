module.exports = function(sequelize, DataTypes) {
// Activities Table
	var Activity = sequelize.define("Activity", {
		venueName: {type: DataTypes.STRING,
					allowNull: false},
		venueCat: DataTypes.STRING,
		day: 		{type: DataTypes.INTEGER,
					allowNull: false}
	}, {
		classMethods: {
			associate: function(models) {
				Activity.belongsTo(models.trip, {through: "Trip"});
				Activity.belongsTo(models.user, 
					{foreignKey: {allowNull: false}
				});
			}
		}
	});

	return Activity;
}

	
	
	

	// Talk to Mark about restriting the input of activities into days client side so that activities can only go into valid days