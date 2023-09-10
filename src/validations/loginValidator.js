const { check, body } = require("express-validator");
const { readJSON } = require("../data");
const { compareSync } = require("bcryptjs");
module.exports = [
  check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .isEmail()
    .withMessage("Formato inválido"),
  body("password")
    .custom((value, {req}) => {
        const users = readJSON('users.json');
        const user = users.find(user => user.email === req.body.email);

        if(!user || !compareSync(value,user.password)){
            return false
        }
            return true
    }).withMessage('Credenciales inválidas')

];