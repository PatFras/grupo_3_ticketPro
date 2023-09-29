const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");
const User = require("../../data/user");

module.exports = (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    const users = readJSON("users.json");
    const user = new User(req.body);

    users.push(user);
    writeJSON(users, "users.json");

 
    req.session.userLogin = {
      id: user.id,
      name: user.name,
      
    };

  
    return res.redirect("/");
  } else {
    return res.render("users/register", {
      errors: errors.mapped(),
      old: req.body,
    });
  }
};
