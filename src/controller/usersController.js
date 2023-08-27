const { readJSON } = require("../data");
const products     = readJSON('products.json');
const categories   = readJSON('categories.json');
const sections     = readJSON('sections.json');
module.exports = {
    register : (req,res) => {
        return res.render('register')
    },
    login : (req,res) => {
        return res.render('login')
    },
    profile : (req,res) => {
        return res.render('profile')
    },
    productCart : (req,res) => {
        return res.render('productCart')
    },
    productDetail : (req,res) => {
        return res.render('productDetail')
    },
    addProduct : (req,res) => {
        return res.render('addProduct', { products, categories, sections })
    },
    editProduct : (req,res) =>{
        return res.render('productEdit')
    }
}