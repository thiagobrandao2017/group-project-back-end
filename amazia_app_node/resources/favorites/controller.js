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

// controller.show = (req, res) => {
//     Favorite
//     .findById(req.user, req.body.restaurant_id)
//     .then((data) => {
//       res.sendStatus(201);
//     })
//     .catch((err) => {
//       res.send(err);
//     })
// }
//
// controller.update = (req, res) => {
//     Favorite
//     .update(req.body.restaurant.id, req.user.id, req.params.id)
//     .then(() => {
//        res.sendStatus(200);
//     })
//     .catch((err) => {
//        res
//        .status(400)
//        .json(err);
//     });
// }
//
// controller.destroy = (req, res) => {
//     Favorite
//     .destroy(req.body.restaurant.id, req.params.id)
//     .then(() => {
//         res.sendStatus(200);
//           })
//     .catch((err) => {
//         res
//         .status(400)
//         .json(err);
//     });
// }

module.exports = controller;
