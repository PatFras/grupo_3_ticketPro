const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  
  body("userName")
    .isLength({
      min: 2,
    })
    .withMessage("El user name es obligatorio")
    .trim()
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido")
    .custom((value, { req }) => {
      const users = readJSON("users.json");
      const user = users.find((user) => user.email === value);

      if (user) {
        return false;
      }
      return true;
    })
    .withMessage("El email ya se encuentra registrado"),
  body("password").isLength({
    min: 6,
    max: 12,
  })
  .withMessage('La contraseña debe contar con un minimo de 6 caracteres y maximo de 12')
  ,
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];
