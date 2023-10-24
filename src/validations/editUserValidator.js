const { check, body } = require("express-validator");
const db = require('../database/models');
const { compareSync } = require('bcryptjs');
module.exports = [
  
  check("name")
    .isLength({
      min: 2,
    })
    .withMessage("El user name es obligatorio")
    .trim()
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  check("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
   ,
   body("password")
  .custom((value, {req}) => {
    const users = readJSON('users.json');
    const user = users.find(user => user.id == req.session.userLogin.id);
    if(!user || !compareSync(value,user.password)){
      return false
    }
      return true
  }).withMessage('Credenciales inválidas')
  .isLength({
    min: 6,
    max: 12,
  })
  .withMessage('La contraseña debe contar con un minimo de 6 caracteres y maximo de 12'),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];