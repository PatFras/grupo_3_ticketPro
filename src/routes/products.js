var express = require('express');
const productController = require('../controller/productController');
var router = express.Router();

/* GET home page. */
router.get('/productEdit', productController.edit);


module.exports = router;
