const express = require('express');
const router = express.Router();

const controller = require('./controller');
const Auth = require("../../services/auth");

router.route("/")
  .all(Auth.restrict)
  .get(controller.index)
  .post(controller.save);




module.exports = router;
