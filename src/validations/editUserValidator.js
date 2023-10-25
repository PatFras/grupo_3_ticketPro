const { check, body } = require("express-validator");
const db = require('../database/models');

module.exports = [
  check("name")
    .isLength({ min: 2 })
    .withMessage("El nombre es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),

  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),

  body("password")
  .notEmpty()
  .withMessage("El email es obligatorio"),


  body('password2')
   .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];
