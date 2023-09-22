const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');
const { validationResult } = require("express-validator");


module.exports = async (req, res) => {
    const errors = validationResult(req);
    const categories = readJSON('categories.json');
    const sections = readJSON('sections.json');
    if(!errors.isEmpty()) {
        res.render("addProduct", {
            categories,
            sections,
            errors: errors.mapped(),
            old:req.body });
    }else{
        const products = readJSON('products.json');
        
        const newProductData = {
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
        };
        
        const newProduct = new Product(newProductData);
        
        products.push(newProduct);
        writeJSON(products, 'products.json');
        
        return res.redirect('/products/productList');
    }
}
