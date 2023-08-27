const { readJSON } = require("../data");
const products = readJSON('products.json');
const categories = readJSON('categories.json');

module.exports = {
    index : (req,res) => {   
    
        return res.render('index', {
            products,
            categories
        })
    }
}
