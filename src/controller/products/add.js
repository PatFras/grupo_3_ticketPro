const db = require('../../database/models');
module.exports = async(req,res) => {  
    let categories = await db.Category.findAll();
    let sections = await db.Section.findAll();
    let products = await db.Product.findAll();
    return res.render('addProduct',{
        products,
        categories,
        sections : sections.sort()
    })
}