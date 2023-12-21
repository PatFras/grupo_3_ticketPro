const db = require("../../database/models");
const moment = require("moment");
const generateGoogleMapsLink = require("../../../public/js/googleMapsLink");

module.exports = (req, res) => {
  db.Product.findByPk(req.params.id)
    .then((product) => {
      return res.render("productDetail", {
        ...product.dataValues,
        moment,
        generateGoogleMapsLink,
      });
    })
    .catch((error) => console.log(error));
};
