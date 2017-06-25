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
    Favorite.saveRestaurant(req.user, req.body)
    .then((data) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
    });
}

controller.show = (req, res) => {
   // console.log(req.body); => {}
   // console.log(req.params.id); => favorites.id
    Favorite
    .findById(req.user, req.params.id)
    .then((data) => {
      // data => does not bring back restaurants data that we need
      res.status(201)
      .json(data);
    })
    .catch((err) => {
      res.send(err);
    })
}


module.exports = controller;
