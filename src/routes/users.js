var express = require('express');
const usersController = require('../controller/usersController')

var router = express.Router();

/* GET users listing. */
router.get('/register', usersController.register);
router.get('/login', usersController.login);
router.get('/productCart', usersController.productCart);
router.get('/productDetail/:id', usersController.productDetail);
router.get('/productList', usersController.productList);
router.get('/addProduct', usersController.addProduct);
router.get('/editProduct', usersController.editProduct);

module.exports = router;
