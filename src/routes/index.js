var express = require("express");
const indexController = require("../controller/indexController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.index);
router.get("/search", indexController.search);
router.get("/allEvents", indexController.allEvents);
router.get("/termsAndConditions", indexController.termsAndConditions);
router.get("/politicsOfPrivacy", indexController.politicsOfPrivacy);
router.get("/whoWeAre", indexController.whoWeAre);

module.exports = router;
