const { readJSON } = require("../data")

module.exports = {
    index : (req,res) => {   
        const products = readJSON('products.json');
    
        return res.render('index', {
            products
        })
    },
    addProduct : (req,res)  => {

        const products = readJSON('products.json');
        const categories = readJSON('categories.json');
        const sections = readJSON('sections.json')
        return res.render('addProduct', {
            products,
            categories,
            sections
        })
    }
}