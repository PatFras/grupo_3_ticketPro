const db = require("../../database/models");

module.exports = async (req, res) => {
    const id = +req.params.id;

    const product = await db.Product.findOne({
        where: { id: id }
    });

    if (product) {
        const categories = await db.Category.findAll();
        const sections = await db.Section.findAll();

        return res.render('productEdit', {
            categories,
            sections,
            ...product.dataValues
        });
    }
};

