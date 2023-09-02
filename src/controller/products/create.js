const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');

module.exports = (req,res) => {
    const products = readJSON('products.json');

    const newProduct = new Product(req.body);
    products.push(newProduct);
    writeJSON(products, 'products.json');
    return res.redirect('/products/productList')
}