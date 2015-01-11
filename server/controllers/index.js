//controllers
var bluebird = require('bluebird');
var models = require('../models');
var modelsV2 = require('../sequelize');


module.exports = {
  messages: {
    get: function (req, res) {
      // models.messages.get(req.query).then(function(data) {
      //   console.log(data);
      //   res.status(200).type('json')
      //   .end(JSON.stringify({results: data}));
      // })
    },
    post: function (req, res) {
      modelsV2.Rooms
        .findOrCreate({where :{roomname: 'lobby'}});
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

