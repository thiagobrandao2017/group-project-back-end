const Restaurant = require('../../models/restaurant');

let controller = {};

controller.index = (req, res) => {
    Restaurant.findAll()
    .then(restaurants => {
      res.send(restaurants);
    })
    .catch(err => console.log(err))
}


module.exports = controller;
