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
controller.create = (req, res) => {
    Restaurant
    .create(req.body.restaurant)
    .then((restaurant) => {
        res
        .status(201)
        .json(restaurant);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.show = (req, res) => {
    Restaurant
    .findById(req.params.id)
    .then((restaurant) => {
        res
        .status(200)
        .json(restaurant);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.update = (req, res) => {
    Restaurant
    .update(req.body.restaurant, req.params.id)
    .then(() => {
        res.sendStatus(200);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

module.exports = controller;
