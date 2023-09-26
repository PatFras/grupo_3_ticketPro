const express = require('express');
const productsController = require('../controller/productsController');
const upload = require('../middlewares/upload');
const adminCheck = require('../middlewares/adminCheck');
const addProductValidator = require('../validations/addProductValidator');
const editProductvalidator = require('../validations/editProductvalidator');

var router = express.Router();

router
    .get('/productCart', productsController.productCart)
    .get('/productDetail/:id', productsController.productDetail)
    .get('/productList', adminCheck, productsController.productList)
    .get('/addProduct', adminCheck, productsController.addProduct)
    .post('/add',[adminCheck,upload.single('image'),addProductValidator], productsController.create)
    .get('/edit/:id', adminCheck, productsController.edit)
    .put('/update/:id', [adminCheck, upload.single('image')], editProductvalidator, productsController.update)
    .delete('/remove/:id', adminCheck, productsController.remove)

module.exports = router;
