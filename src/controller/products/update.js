const { validationResult } = require("express-validator");
const db = require("../../database/models");
const fs = require("fs");
const path = require('path');

module.exports = async (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const {
            name,
            price,
            category,
            description,
            section,
            address,
            date,
            serviceCharge,
        } = req.body;
        const productId = +req.params.id;

        try {
            let updateFields = {
                name,
                description,
                price: +price,
                category,
                section,
                address,
                date,
                serviceCharge: +serviceCharge,
            };

            // Verifica si se adjuntó un nuevo archivo de imagen
            if (req.file) {
                const oldProduct = await db.Product.findByPk(productId);
                // Elimina la imagen antigua si existe
                if (oldProduct.image) {
                    let route = (data) => fs.existsSync(path.join(__dirname,'..','..', '..', 'public', 'images', 'products', data))
                    if (route(oldProduct.image)) {
                    fs.unlinkSync(path.join(__dirname,'..','..','..', 'public', 'images', 'products', oldProduct.image))
                }  
                }
                // Actualiza la ruta de la nueva imagen
                updateFields.image = req.file.filename;
            }

            await db.Product.update(updateFields, {
                where: {
                    id: productId,
                },
            });

            return res.redirect('/products/productList');
        } catch (error) {
            console.error(error);
        }
    } else {
        try {
            const categories = await db.Category.findAll();
            const sections = await db.Section.findAll();
            const productId = +req.params.id;
            const product = await db.Product.findOne({
                where: { id: productId },
            });

            return res.render("productEdit", {
                errors: errors.mapped(),
                id: req.params.id,
                name: req.body.name,
                price: +req.body.price,
                category: req.body.category,
                description: req.body.description,
                section: req.body.section,
                address: req.body.address,
                date: req.body.date,
                serviceCharge: +req.body.serviceCharge,
                location: req.body.location,
                categories,
                sections,
                ...product.dataValues,
            });
        } catch (error) {
            console.error(error);
        }
    }
};
