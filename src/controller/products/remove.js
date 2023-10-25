const fs = require('fs');
const db = require('../../database/models');
const path = require('path');

module.exports = (req,res) => {

        const id = +req.params.id
        db.Product.findByPk(id)
        .then(product => {
            let route = (data) => fs.existsSync(path.join(__dirname, '..', 'public', 'images', 'products', data))
            if (route(product.image)) {
                fs.unlinkSync(path.join(__dirname, '..', 'public', 'img', 'products', product.image))
            }
        })
        .then(response => {
            db.Product.destroy({
                where: {id:id}
            })
            .then(redireccion => {
                res.redirect('/products/productList')
            })
        })
           
}
