
const { readJSON, writeJSON } = require("../../data");



module.exports = (req,res) => {
    const {name, price, category, description, section, address, date, image, serviceCharge} = req.body;
    console.log(  "este es el body" ,req.body)
    const products = readJSON('products.json');

    const productsModify = products.map(product => {
        if(product.id === +req.params.id){
            product.name = name
            product.description = description
            product.price = +price
            product.category = category
            product.section = section
            product.address = address
            product.date = date
            product.image = req.file ? req.file.filename : product.image;
            product.serviceCharge = serviceCharge
        }

        return product
    })

    writeJSON(productsModify, 'products.json')

    return res.redirect('/products/productList')
}