const { check, body } = require("express-validator");
const { readJSON } = require("../data");
module.exports = [
  
  check("userName")
    .isLength({
      min: 2,
    })
    .withMessage("El user name es obligatorio")
    .isAlpha("es-ES")
    .withMessage("Solo letras"),
  body("email")
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
  check("password").isLength({
    min: 6,
    max: 12,
  }),
  body('password2')
    .custom((value,{req}) => {
        if(value !== req.body.password){
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
];
