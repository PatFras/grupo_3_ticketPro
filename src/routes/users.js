const express = require('express');
const { register, processRegister, login, processLogin, profile, update, logout } = require('../controller/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const userCheck = require('../middlewares/userCheck');
const notLoguin = require('../middlewares/notLoguin');
const router = express.Router();

router
  .get('/register',notLoguin, register)
  .post('/register',registerValidator, processRegister)
  .get('/login', login)
  .post('/login',loginValidator, processLogin)
  .get('/profile',userCheck, profile)
  .put('/update',userCheck, update)
  .get('/logout', logout)

module.exports = router;