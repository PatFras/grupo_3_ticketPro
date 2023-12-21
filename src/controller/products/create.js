const { validationResult } = require("express-validator");
const db = require("../../database/models");

module.exports = async (req, res) => {
  const errors = validationResult(req);
  let categories = await db.Category.findAll();
  let sections = await db.Section.findAll();
  if (req.fileValidationError) {
    let image = {
      param: "image",
      msg: req.fileValidationError,
    };
    errors.errors.push(image);
  }
  if (!errors.isEmpty()) {
    res.render("addProduct", {
      categories,
      sections,
      errors: errors.mapped(),
      old: req.body,
    });
  } else {
    db.Product.create({
      name: req.body.name,
      price: +req.body.price,
      description: req.body.description,
      serviceCharge: +req.body.serviceCharge,
      date: req.body.date,
      address: req.body.address,
      location: req.body.location,
      image: req.file ? req.file.filename : "",
      createdAt: new Date(),
      categoryId: req.body.categoryId,
      sectionId: req.body.sectionId,
    })
      .then((product) => {
        console.log(product);
        return res.redirect("/products/productList");
      })
      .catch((error) => {
        console.log(error);
        res.redirect("/products/addProduct");
      });
  }
};
