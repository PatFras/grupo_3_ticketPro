const db = require('../../database/models');
const moment = require('moment');

module.exports = (req,res) => {
    db.Product.findByPk(req.params.id)
    .then(product => {
        return res.render('productDetail',{
			...product.dataValues,
            moment
		})
    }).catch(error => console.log(error))
    
}