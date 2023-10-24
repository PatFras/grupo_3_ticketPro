const { validationResult } = require("express-validator");
const db = require("../../database/models");

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
            await db.Product.update(
                {
                    name,
                    description,
                    price: +price,
                    category,
                    section,
                    address,
                    date,
                    serviceCharge: +serviceCharge,
                },
                {
                    where: {
                        id: productId,
                    },
                }
            );

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

















