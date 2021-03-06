const express = require("express");
const router = express.Router();

const controller = require("./controller");

router.route("/")
    .get(controller.index)
    .post(controller.create);


router.route("/login")
    .post(controller.login);

module.exports = router;
