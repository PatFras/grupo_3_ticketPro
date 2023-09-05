var express = require('express');
const usersController = require('../controller/usersController');

var router = express.Router();

/* GET users listing. */
router.get('/register', usersController.register);
router.get('/login', usersController.login);

module.exports = router;
