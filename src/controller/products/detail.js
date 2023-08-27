const { readJSON } = require('../../data');
module.exports = (req,res) => {
    const products = readJSON('products.json');    
    const product = products.find(product => product.id === +req.params.id);
    return res.render('productDetail',{
			...product,
		})
}