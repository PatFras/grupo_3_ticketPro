const { validationResult } = require("express-validator");
const db = require("../../database/models");
const { hashSync } = require("bcryptjs");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const { name, email, password } = req.body;
    db.User.create({
      name: name.trim(),
      email: email.trim(),
      password: hashSync(password, 10),
      roleId: 2,
    })
      .then(() => {
        return res.redirect("login");
      })
      .catch((error) => console.log(error));
  } else {
    return res.render("users/register", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
};
