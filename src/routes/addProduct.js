var express = require('express');
const addProductController = require('../controller/addPructController');
var router = express.Router();

/* GET home page. */
router.get('/', addProductController.addProduct);

module.exports = router;
