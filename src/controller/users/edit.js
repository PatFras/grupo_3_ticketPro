const db = require("../../database/models");
const { validationResult } = require("express-validator");
const { hashSync } = require("bcryptjs");

module.exports = (req, res) => {
  const errors = validationResult(req);
  let successMsg = 0;

  if (!errors.isEmpty()) {
    return res.render("users/profile", {
      errors: errors.array(),
      ...req.body,
      successMsg,
    });
  }

  successMsg = 1;
  const user = req.session.userLogin;

  db.User.update(
    {
      name: req.body.name,
      password: hashSync(req.body.password, 10),
    },
    {
      where: {
        id: req.session.userLogin.id,
      },
    }
  )
    .then((response) => {
      req.session.userLogin.name = req.body.name;

      res.locals.userLogin.name = req.body.name;

      res.redirect("/");
    })
    .catch((error) => {
      console.error(error);

      res.render("users/profile", {
        email: user.email,
        ...user,
        successMsg,
        errors: [{ msg: "Error al actualizar el perfil." }],
      });
    });
};
