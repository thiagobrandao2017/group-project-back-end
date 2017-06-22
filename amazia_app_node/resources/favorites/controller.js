const Favorite = require('../../models/favorite');

let controller = {};

controller.index = (req, res) => {
    Favorite.favoritesIndex()
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

module.exports = controller;
