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
    .custom(async (value, { req }) => {
      const user = await db.User.findByPk(req.session.userLogin.id);

      if (!user) {
        throw new Error('Usuario no encontrado');
      }

      
      if (user.password !== value) {
        throw new Error('Credenciales inválidas');
      }

  
      if (value.length < 6 || value.length > 12) {
        throw new Error('La contraseña debe tener entre 6 y 12 caracteres');
      }

      return true; 
    }),

  body('password2')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Las contraseñas no coinciden');
      }

      return true; 
    })
];
