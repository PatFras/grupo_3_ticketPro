const express = require('express');
const productsController = require('../controller/productsController');
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');

var router = express.Router();

router
    .get('/productCart', productsController.productCart)
    .get('/productDetail/:id', productsController.productDetail)
    .get('/productList', adminCheck, productsController.productList)
    .get('/addProduct', adminCheck, productsController.addProduct)
    .post('/add', adminCheck, upload.single('image') , productsController.create)
    .get('/edit/:id', adminCheck, productsController.edit)
    .put('/update/:id', adminCheck, upload.single('image'), productsController.update)
    .delete('/remove/:id', adminCheck, productsController.remove)

module.exports = router;
