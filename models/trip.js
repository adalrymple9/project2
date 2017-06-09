// Trips Table
module.exports = function(sequelize, DataTypes) {
        // Add start date column to this table
    var Trip = sequelize.define("Trip", {
            location: {
                type: DataTypes.STRING,
                allowNull: false
            },
            length: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
        classMethods: {
            associate: function(models) {
                Trip.hasOne(models.user, { through: 'traveler' });
                Trip.belongsTo(models.user, {
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Trip;
} 
