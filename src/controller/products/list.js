const db = require("../../database/models");
const moment = require("moment");

module.exports = async (req, res) => {
  try {
    let products = await db.Product.findAll();

    products = products.map((product) => ({
      ...product.dataValues,
      date: moment(product.date).format("DD-MM-YYYY"),
    }));

    return res.render("productList", {
      products,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error al obtener los productos");
  }
};
