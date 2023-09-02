const { readJSON } = require('../../data');
module.exports = (req,res) => {
    const products = readJSON('products.json');
    const categories   = readJSON('categories.json');0
    const sections     = readJSON('sections.json');
    return res.render('productList',{
        products,
        categories, 
        sections 
    })
}
