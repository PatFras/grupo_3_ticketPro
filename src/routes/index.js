var express = require('express');
const indexController = require('../controller/indexController');
var router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/', indexController.addProduct);
module.exports = router;
