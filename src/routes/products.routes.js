const express = require('express');
const {detail, add, create, edit, update, remove} = require('../controller/productsController');
const router  = express.Router();
const upload = require('../../middlewares/upload');
const productsController = require('../controller/productsController');


router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add',upload.single('image') ,create)
    .get('/edit/:id', productsController.edit)
    .put('/update/:id', productsController.update)
    .delete('/remove/:id', remove)

module.exports = router;