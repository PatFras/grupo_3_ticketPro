const express = require('express');
const {detail,add, create, edit, update, remove} = require('../controllers/productsController');
const router  = express.Router();


router
    .get('/detail/:id', detail)
    .get('/add', add)
    .post('/add',create)
    .get('/edit/:id',edit)
    .put('/update/:id',update)
    .delete('/remove/:id',remove)

module.exports = router;