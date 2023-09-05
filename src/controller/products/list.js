const { readJSON } = require('../../data');
module.exports = (req,res) => {
    const products = readJSON('products.json');
    
    return res.render('productList',{
        products,
        
    })
}
