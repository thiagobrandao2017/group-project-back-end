const express = require('express');
const router = express.Router();

router.use('/restaurants', require('./resources/restaurants'));
router.use('/users', require('./resources/users'));

module.exports = router;
