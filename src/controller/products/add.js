const { readJSON } = require('../../data')

module.exports = (req,res) => {   
    const products     = readJSON('products.json');
    const categories = readJSON('categories.json');   
    const sections = readJSON('sections.json');
    return res.render('addProduct',{
        products,
        categories,
        sections : sections.sort()
    })
}