const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout } = require('../controller/usersController');
const loginValidator = require('../validations/loginValidator');
const router = express.Router();

router
  .get('/register', register)
  .post('/register', processRegister)
  .get('/login', login)
  .post('/login',loginValidator, processLogin)
  .get('/profile', profile)
  .put('/update', update)
  .get('/logout', logout)

module.exports = router;