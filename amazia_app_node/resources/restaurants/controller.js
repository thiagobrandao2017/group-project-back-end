const Restaurant = require('../../models/restaurant');

let controller = {};

controller.index = (req, res) => {
    Restaurant.findAll()
    .then((restaurants) => {
            res
            .status(200)
            .json(restaurants);
        })
        .catch((err) => {
            res
            .status(400)
            .json(err);
        });
}

// controller.create = (req,res) => {
//     Restaurant
//     .create(req.body.restaurant, req.session.user)
//     .then(() => {
//       res.redirect('/');
//     })
//     .catch((err) => {
//       res.send(err);
//     })
// }

module.exports = controller;
