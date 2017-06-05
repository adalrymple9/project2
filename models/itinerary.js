module.exports = function(sequelize, DataTypes) {
// Need to set primary key, which will be FK in next table and make the relationship

	var Users = sequelize.define("Users", {
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull:false,
		},
		logged_in: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		}
	});
	
	var Trips = sequelize.define("Trips", {
		
	});
	
	return Users;

}