const Product = require('../../data/Product');
const { readJSON, writeJSON } = require('../../data');
const upload = require('../../middlewares/upload'); // Importa el middleware upload

module.exports = async (req, res) => {
    try {
        const products = readJSON('products.json');
        
        const newProductData = {
            name: req.body.name,
            price: +req.body.price,
            category: req.body.category,
            description: req.body.description,
            section: req.body.section,
            address: req.body.address,
            date: req.body.date,
            image: req.file ? req.file.filename : '',
            serviceCharge: +req.body.serviceCharge,
            location: req.body.location,
        };
        
        const newProduct = new Product(newProductData);
        
        products.push(newProduct);
        writeJSON(products, 'products.json');
        
        return res.redirect('/products/productList');
    } catch (error) {
        console.error('Error en la creación del producto:', error);
        return res.status(500).send('Error en la creación del producto.');
    }
};
