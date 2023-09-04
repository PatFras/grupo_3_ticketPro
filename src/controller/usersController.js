//const { readJSON } = require("../data");
//const categories   = readJSON('categories.json');
//const sections     = readJSON('sections.json');

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
    
}