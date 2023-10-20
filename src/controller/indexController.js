const db = require('../database/models')

module.exports = {
    index : (req,res) => {   
        const products = db.Product.findAll()
        const categories = db.Category.findAll()

        Promise.all([products,categories])
        .then(([products,categories]) => {
            return res.render('index', {
                products,
                categories
            })
        }).catch(error => console.log(error))
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
