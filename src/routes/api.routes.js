const express = require("express");
const {
  checkEmail,
  usersController,
  userController,
} = require("../controller/APIs/usersApiController");
const router = express.Router();

//get check email
router.get("/check-email", checkEmail);
//get all users
router.get("/users", usersController);
//get user
router.get("/users/:id", userController);

module.exports = router;
