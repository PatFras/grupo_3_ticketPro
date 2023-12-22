module.exports = (req, res) => {
  const errors = (req.locals && req.locals.errors) || {};

  if (Object.keys(errors).length > 0) {
    return res.render("users/register", {
      errors: errors,
      old: req.body,
    });
  } else {
    return res.render("users/register");
  }
};
