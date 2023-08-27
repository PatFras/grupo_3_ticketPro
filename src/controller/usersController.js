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
    productDetail : require('./products/detail'),
    productList : require('./products/list'),
    addProduct : (req,res) => {
        return res.render('addProduct')
    },
    editProduct : (req,res) =>{
        return res.render('productEdit')
    }
}