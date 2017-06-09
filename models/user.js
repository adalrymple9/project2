module.exports = function(sequelize, DataTypes) {
    // Need to set primary key, which will be FK in next table and make the relationship
    // Users Table
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
        // logged_in: {
        //     status: function(UsernameSub, PassSub) {
        //         // Are the properties username and password in scope or should I ref model.value 
        //         if (UsernameSub === username && PassSub === password) {
        //             // Does this return go to the user? If not, how can it get there?
        //             return true
        //         } else {
        //             console.log("Wrong Username or Password");
        //         };
        //     defaultValue: false,
        //     allowNull: false
        //     },
            
        // }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Trip);
            }
        }
    });

    return User;

}
