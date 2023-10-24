const express = require('express');
const { register, processRegister, login, processLogin, profile, edit, logout } = require('../controller/usersController');
const registerValidator = require('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');
const editUserValidator = require('../validations/editUserValidator')
const userCheck = require('../middlewares/userCheck');
const notLogin = require('../middlewares/notLogin');
const router = express.Router();

router
  .get('/register',notLogin, register)
  .post('/register', registerValidator, processRegister)
  .get('/login', login)
  .post('/login',loginValidator, processLogin)
  .get('/profile',userCheck, profile)
  .put('/profile',[userCheck, editUserValidator], edit)
  .get('/logout', logout)

module.exports = router;