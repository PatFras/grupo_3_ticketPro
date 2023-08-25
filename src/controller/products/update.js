const { readJSON, writeJSON } = require("../../data");

module.exports = (req,res) => {
    const {name, price, category, discount, description, section, address, date, image, serviceCharge} = req.body;
    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id === req.params.id){
            product.name = name.trim()
            product.description = description.trim()
            product.price = +price
            product.discount = +discount
            product.category = category
            product.section = section
            product.address = address
            product.date = date
            product.image = image
            product.serviceCharge = serviceCharge
        }

        return product
    })

    writeJSON(productsModify, 'products.json')

    return res.redirect('/')
}