const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout } = require('../controller/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const router = express.Router();

router
  .get('/register', register)
  .post('/register',registerValidator, processRegister)
  .get('/login', login)
  .post('/login',loginValidator, processLogin)
  .get('/profile',userCheck, profile)
  .put('/update', update)
  .get('/logout', logout)

module.exports = router;