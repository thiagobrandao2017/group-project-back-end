const Favorite = require('../../models/favorite');

let controller = {};

controller.index = (req, res) => {
    Favorite.favoritesIndex(req.user)
    .then((favorites) => {
            res
            .status(200)
            .json(favorites);
        })
        .catch((err) => {
            res
            .status(400)
            .json(err);
        });
}

controller.save = (req, res) => {
    Favorite.saveRestaurant(req.user, req.body.restaurant_id)
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
}

module.exports = controller;
