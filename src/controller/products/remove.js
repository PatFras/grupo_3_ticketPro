const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const products = readJSON('products.json');
    const modifyProducts = products.filter(product => product.id != req.params.id);
    writeJSON(modifyProducts, 'products.json');
    return res.redirect('/users/productList');
}
