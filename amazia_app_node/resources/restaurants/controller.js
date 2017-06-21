const Restaurant = require('../../models/restaurant');

let controller = {};

controller.index = (req, res) => {
    Restaurant.findAll()
    .then(restaurants => {
      res.render("?", { beers }); // What goes in here? am I even rendering?
    })
    .catch(err => console.log(err))
}


module.exports = controller;
