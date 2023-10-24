const fs = require('fs');
const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const products = readJSON('products.json');
    const modifyProducts = products.filter((product) => {
        if(product.id == req.params.id){
            fs.existsSync(`./public/images/${product.image}`) &&
			fs.unlinkSync(`./public/images/${product.image}`);
        }
        return product.id !== +req.params.id;
    });
    writeJSON(modifyProducts, 'products.json');
    
    return res.redirect('/products/productList');
}
