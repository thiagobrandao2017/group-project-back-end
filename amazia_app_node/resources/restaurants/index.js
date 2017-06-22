const express = require('express');
const router = express.Router();

const controller = require('./controller');


router.get('/', controller.index);
router.post('/',controller.create);

router.get('/:id',controller.show);
router.put('/:id', controller.update);




module.exports = router;
