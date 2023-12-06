const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");
const generateGoogleMapsLink = require("../../public/js/googleMapsLink");

module.exports = {
  index: (req, res) => {
    const products = db.Product.findAll();
    const categories = db.Category.findAll();

    Promise.all([products, categories])
      .then(([products, categories]) => {
        return res.render("index", {
          products,
          categories,
          moment,
        });
      })
      .catch((error) => console.log(error));
  },
  search: (req, res) => {
    db.Product.findAll({
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: req.query.keywords,
            },
          },
          {
            location: {
              [Op.substring]: req.query.keywords,
            },
          },
        ],
      },
    }).then((results) => {
      return res.render("searchResults", {
        results,
        keywords: req.query.keywords,
        moment,
        generateGoogleMapsLink,
      });
    });
  },
  allEvents: (req, res) => {
    const products = db.Product.findAll();
    Promise.all([products]).then(([products]) => {
      return res.render("allEvents", {
        products,
        moment,
      });
    });
  },
};
