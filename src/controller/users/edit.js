const { readJSON, writeJSON } = require('../../data');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');

module.exports = (req, res) => {
  const errors = validationResult(req);
  let successMsg = 0;

  if (!errors.isEmpty()) {
    return res.render('users/profile', { errors: errors.mapped(), ...req.body, successMsg });
  }

  successMsg = 1;
  const user = req.session.userLogin;

  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
 
  let users = readJSON('users.json');
  
  const userIndex = users.findIndex(u => u.id === user.id);
  
  if (userIndex !== -1) {
    users[userIndex] = {
      "id": user.id,
      "name": req.body.name,
      "email": req.body.email,
      "password": hashSync(req.body.password,10),
      "role": "user",
      "createAt": new Date
    };

    writeJSON(users, 'users.json');
  } else {
    console.error('User not found.'); 
  }

  return res.render('users/profile', { ...user, successMsg });
};
