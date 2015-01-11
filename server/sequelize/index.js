/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat2", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var Users = sequelize.define('Users', {
  username: Sequelize.STRING
});

var Rooms = sequelize.define('Rooms', {
  roomname: Sequelize.STRING
});

var Messages = sequelize.define('Messages', {
  text: Sequelize.TEXT,
});

Users.hasMany(Messages);
Messages.belongsTo(Users);

Rooms.hasMany(Messages);
Messages.belongsTo(Rooms);

Users.sync();
Messages.sync();
Rooms.sync();

module.exports = {
  'Users' : Users,
  'Rooms' : Rooms,
  'Messages' : Messages
}
/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
// User.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // // now instantiate an object and save it:
  // var newUser = User.build({username: "Jean Valjean"});
  // newUser.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
/*    User.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
      // This function is called back with an array of matches.
      for (var i = 0; i < usrs.length; i++) {
        console.log(usrs[i].username + " exists");
      }
    });*/
  // });
// });
