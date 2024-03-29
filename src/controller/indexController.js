const db = require("../database/models");
const { Op } = require("sequelize");
const moment = require("moment");
const generateGoogleMapsLink = require("../../public/js/googleMapsLink");

module.exports = {
  index: (req, res) => {
    const products = db.Product.findAll();
    const categories = db.Category.findAll();
    const currentDate = moment().format("YYYY-MM-DD");
    const nextEvent = db.Product.findOne({
      where: {
        date: {
          [Op.gte]: currentDate,
        },
      },
      order: [["date", "ASC"]],
      limit: 1,
    });

    Promise.all([products, categories, nextEvent])
      .then(([products, categories, nextEvent]) => {
        return res.render("index", {
          products,
          categories,
          moment,
          nextEvent,
        });
      })
      .catch((error) => console.log(error));
  },
  search: (req, res) => {
    const whereClause = {
      [Op.and]: [
        {
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
        req.query.category && req.query.category !== ""
          ? {
              categoryId: {
                [Op.eq]: req.query.category,
              },
            }
          : {},
      ],
    };

    if (req.query.location && req.query.location !== "") {
      whereClause[Op.or].push({
        location: {
          [Op.substring]: req.query.location,
        },
      });
    }

    db.Product.findAll({
      where: whereClause,
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
  termsAndConditions: (req, res) => {
    return res.render("termsAndConditions");
  },
  politicsOfPrivacy: (req, res) => {
    return res.render("politicsOfPrivacy");
  },
  whoWeAre: (req, res) => {
    return res.render("whoWeAre");
  },
  freeEvents: (req, res) => {
    db.Product.findAll({
      where: {
        sectionId: 1,
      },
    }).then((products) => {
      return res.render("freeEvents", {
        products,
        moment,
        generateGoogleMapsLink,
      });
    });
  },
  salePoints: (req, res) => {
    return res.render("salePoints");
  },
};
