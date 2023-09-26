const { validationResult } = require("express-validator");
const { readJSON, writeJSON } = require("../../data");

module.exports = (req, res) => {
  const errors = validationResult(req);
  const products = readJSON("products.json");

  if (errors.isEmpty()) {
    const { name, price, category, description, section, address, date, serviceCharge } = req.body;
    

    const productsModify = products.map((product) => {
      if(product.id === +req.params.id){
        

        product.name = name
        product.description = description
        product.price = +price
        product.category = category
        product.section = section
        product.address = address
        product.date = date
        product.image = product.image
        product.serviceCharge = serviceCharge
      }

      return product;
    });

    writeJSON(productsModify, "products.json");

    return res.redirect('/products/productList');
  } else {
    const categories = readJSON("categories.json");
    const sections = readJSON("sections.json");

    const product = products.find((product) => product.id === req.params.id);
    return res.render("productEdit", {
      errors: errors.mapped(),
      id: req.params.id,
      name: req.body.name,
            price: +req.body.price,
            category: req.body.category,
            description: req.body.description,
            section: req.body.section,
            address: req.body.address,
            date: req.body.date,
            image: req.file ? req.file.filename : '',
            serviceCharge: +req.body.serviceCharge,
            location: req.body.location,
      categories,
      sections,
      ...product,
    });
  }
};
















