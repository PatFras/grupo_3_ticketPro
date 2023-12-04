const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    db.User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        req.session.userLogin = {
          id: user.id,
          name: user.name,
          role: user.roleId,
        };
        req.body.remember !== undefined &&
          res.cookie("ticketProUser", req.session.userLogin, {
            maxAge: 5000 * 60,
          });

        if (user.roleId === 1) {
          return res.redirect("/products/productList");
        } else if (user.roleId === 2) {
          req.body.remember !== undefined &&
            res.cookie("ticketProUser", req.session.userLogin, {
              maxAge: 5000 * 60,
            });
          return res.redirect("/");
        }
      })
      .catch((error) => console.log(error));
  } else {
    return res.render("users/login", {
      errors: errors.mapped(),
    });
  }
};
