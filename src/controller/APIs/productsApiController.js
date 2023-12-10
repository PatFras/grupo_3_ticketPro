const db = require("../../database/models");

module.exports = {
allProducts: async (req, res) => {
    try {
        const products = await db.Product.findAll({
            attributes: ["id", "name", "price", "description", "date", "image"],
          });
        const count = await db.Product.count();
        const productsData = {
            count: count,
            products: products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            date: product.date,
            image: `/images/products/${product.image}`,
            detail: `/api/products/${product.id}`,
            })),
        };

        res.status(200).json({
            ok:true,
            data:productsData
        })
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: error.message || "Hubo un error",
          });
    }
},

productDetail: async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await db.Product.findByPk(productId);

        if (!product) {
            return res.status(404).json({
                ok: false,
                msg: "Producto no encontrado",
            });
        }

        const productDetails = {
            id: product.id,
            name: product.name,
            price: product.price,
            description: product.description,
            serviceCharge: product.serviceCharge,
            date: product.date,
            address: product.address,
            location: product.location,
            categoryId: product.categoryId,
            sectionId: product.sectionId,
            image: `/images/products/${product.image}`,
            detail: `/api/products/${product.id}`,
        };

        res.status(200).json({
            ok: true,
            data: productDetails,
        });
    } catch (e) {
        res.status(500).json({
            ok: false,
            msg: e.message || "Hubo un error",
        });
    }
}
}