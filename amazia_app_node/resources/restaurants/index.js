const express = require('express');
const router = express.Router();

const controller = require('./controller');
const Auth = require("../../services/auth");


router.route('/')
// .all(Auth.restrict)
.get(controller.index)
.post(controller.create);

router.route('/:id')
// .all(Auth.restrict)
.get(controller.show)
.put(controller.update);




module.exports = router;
