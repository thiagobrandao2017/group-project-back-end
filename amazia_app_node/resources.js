const express = require('express');
const router = express.Router();

router.use('/restaurants', require('./resources/restaurants'));

module.exports = router;
