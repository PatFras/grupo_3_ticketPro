

module.exports = {
    productCart : (req,res) => {
        return res.render('productCart')
    },
    productDetail : require('./products/detail'),
    productList : require('./products/list'),
    addProduct :  require('./products/add'),
    create: require('./products/create'),
    edit : require('./products/edit'),
    update: require('./products/update'),
    remove: require('./products/remove'),
}
