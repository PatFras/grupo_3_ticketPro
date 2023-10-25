const db = require('../database/models');
const { Op } = require('sequelize');
const moment = require('moment');

module.exports = {
    index : (req,res) => {   
        const products = db.Product.findAll()
        const categories = db.Category.findAll()

        Promise.all([products,categories])
        .then(([products,categories]) => {
            return res.render('index', {
                products,
                categories,
                moment
            })
        }).catch(error => console.log(error))
    },
    search: (req, res) => {
        db.Product.findAll({
            where : {
                name : {
                    [Op.substring] : req.query.keywords
                }
            }
        })
        .then(results => {
            return res.render('searchResults', {
                results,
                keywords: req.query.keywords,
                moment
            });
        })       
    },
    allEvents : (req,res) => {
        const products = db.Product.findAll()
        Promise.all([products])
        .then(([products]) => {
            return res.render('allEvents', {
                products,
                moment
            })
        })       
    }
}
