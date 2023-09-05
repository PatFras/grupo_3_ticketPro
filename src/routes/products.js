const express = require('express');
const productsController = require('../controller/productsController');
const upload = require('../middlewares/upload');

var router = express.Router();

router
    .get('/productCart', productsController.productCart)
    .get('/productDetail/:id', productsController.productDetail)
    .get('/productList', productsController.productList)
    .get('/addProduct', productsController.addProduct)
    .post('/add',upload.single('image') , productsController.create)
    .get('/edit/:id', productsController.edit)
    .put('/update/:id',upload.single('image'), productsController.update)
    .delete('/remove/:id', productsController.remove)

module.exports = router;
