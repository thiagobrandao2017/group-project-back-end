const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../../services/auth");

const User = require("../../models/user");

let controller = {};

controller.index = (req,res) => {
  User
  .findAll()
  .then((user) => {
    res
    .status(201)
    .json(user);
  })
  .catch((err) => {
      res
      .status(400)
      .json(err);
  });
}

controller.create = (req, res) => {
    User
    .create(req.body.user)
    .then((user) => {
        res
        .status(201)
        .json(user);
    })
    .catch((err) => {
        res
        .status(400)
        .json(err);
    });
}

controller.login = (req, res) => {
    //Check for email in DB
    //IF email is not found, reject login
    //IF email is found, continue auth
    //Compare user-entered password with hashed password in DB
    //IF no match, reject login
    //IF match, send JWT

    User
    .findByEmail(req.body.user)
    .then((user) => {
        Auth
        .authenticate(user, req)
        .then((data) => {
          res
          .status(201)
          .json(data);
        })
        .catch((err) => {
          res
          .status(err.status)
          .json({error: err.error});
        });

        // if (user) {
        //     //Continue auth
        //     if (bcrypt.compareSync(req.body.user.password, user.password)) {
        //         //Success! User is authenticated
        //
        //         //Make sure password is not saved to JWT
        //         user.password = null;
        //
        //         //Create signed token with serialized user data
        //         const token = jwt.sign(user, process.env.SECRET_KEY, {
        //             expiresIn: "7d"
        //         });
        //
        //         //Send the JWT as a response
        //         res
        //         .status(201)
        //         .json({token: token, user: user});
        //     } else {
        //         //User is not authenticated
        //         res
        //         .status(401)
        //         .json({error: "Not authorized"});
        //     }
        // } else {
        //     res
        //     .status(404)
        //     .json({error: "User not found by that email"});
        // }
    })
}

module.exports = controller;
