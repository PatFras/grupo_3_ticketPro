const express = require("express");
const { checkEmail } = require("../controller/APIs/usersApiController");
const router = express.Router();

//api
router.get("/check-email", checkEmail);

module.exports = router;
