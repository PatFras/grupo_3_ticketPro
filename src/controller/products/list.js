const db = require('../../database/models');

module.exports = async(req,res) => {
    let products = await db.Product.findAll();   
    return res.render('productList',{
        products,
        
    })
}
