const { readJSON } = require("../data");
const products = readJSON('products.json');
const categories = readJSON('categories.json');

module.exports = {
    index : (req,res) => {   
    
        return res.render('index', {
            products,
            categories
        })
    },
    search : (req,res) => {
        const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase()));
        return res.render('searchResults', {
            results,
            keywords : req.query.keywords
        })
    }
}
