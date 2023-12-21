const { check, body } = require("express-validator");


module.exports = [
  check("name")
    .isLength({ min: 2 })
    .withMessage("El nombre es obligatorio y debe tener al menos 2 caracteres")
    .isAlpha("es-ES")
    .withMessage("El nombre solo debe contener letras"),

  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("El formato del email es inválido"),

  body("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),

  body('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
      }
      return true;
    }
  ),
];
