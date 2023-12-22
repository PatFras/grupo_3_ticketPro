const db = require("../../database/models");
const moment = require("moment");

module.exports = async (req, res) => {
  try {
    let products;
    let categoryName;
    const categories = await db.Category.findAll();

    if (req.query.category) {
      // Si se proporciona una categoría, filtra los productos por esa categoría
      products = await db.Product.findAll({
        where: {
          categoryId: req.query.category,
        }
      });
      // Obtener el nombre de la categoría buscada
      const category = await db.Category.findByPk(req.query.category);
      categoryName = category ? category.name : "";
    } else {
      products = await db.Product.findAll();
    }
    // Indica si se encontraron productoscon la categoría buscada
    const noProductsFound = products.length === 0;

    products = products.map((product) => ({
      ...product.dataValues,
      date: moment(product.date).format("DD-MM-YYYY"),
    }));

    return res.render("productList", {
      products,
      categories,
      noProductsFound,
      categoryName
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error al obtener los productos");
  }
};
