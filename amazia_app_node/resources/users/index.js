const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route("/")
    .post(controller.create)
    .get(controller.index);

router.route("/login")
    .post(controller.login);

module.exports = router;
