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
    search: (req, res) => {
        const keywords = req.query.keywords ? req.query.keywords.toLowerCase() : '';
        const results = keywords ? products.filter(product => product.name.toLowerCase().includes(keywords)) : [];
        return res.render('searchResults', {
            results,
            keywords: req.query.keywords
        });
    },
    allEvents : (req,res) => {
        return res.render('allEvents', {
            products,
            categories
        })
    }
}
