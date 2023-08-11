var express = require('express');
const usersController = require('../controller/usersController');

var router = express.Router();

/* GET users listing. */
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/productCart', usersController.productCart);
router.get('/productDetail', usersController.productDetail);
router.get('/addProduct', usersController.addProduct);


module.exports = router;
