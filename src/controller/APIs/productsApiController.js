const db = require("../../database/models");

module.exports = {
    getAllProducts: async (req, res) => {
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
                ok: true,
                data: productsData
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
    },
    getCategoriesWithProducts: async (req, res) => {
        try {
          const categories = await db.Category.findAll({
            include: [
              {
                association: "products",
                attributes: ["id", "name", "price", "serviceCharge"],
              },
            ],
          });
      
          return res.status(200).json({
            ok: true,
            data: categories,
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
          });
        }
      },
      getCategories: async (req, res) => {
        try {
          const categories = await db.Category.findAll({
            attributes: ["name", "id"],
          });
      
          return res.status(200).json({
            ok: true,
            data: categories,
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
          });
        }
      },
    getSections: async (req, res) => {
        try {
          const sections = await db.Section.findAll({
            attributes: ["name", "id"],
          });
      
          return res.status(200).json({
            ok: true,
            data: sections,
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
          });
        }
    },
    totalProductInDB: async (req, res) => {
        try {
          const total = await db.Product.count();
      
          return res.status(200).json({
            ok: true,
            data: total,
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
          });
        }
    },
    getAllProducts: async (req, res) => {
        try {
          const products = await db.Product.findAll({
            include: ["section", "category"],
          });
      
          return res.status(200).json({
            ok: true,
            data: products,
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
          });
        }
    },
    createProduct: async (req, res) => {
        try {
          const newProduct = await db.Product.create({
            name: req.body.name.trim(),
            price: +req.body.price,
            description: req.body.description?.trim(),
            serviceCharge: req.body.serviceCharge?+req.body.serviceCharge:0,
            date: req.body.date,
            address: req.body.address,
            location: req.body.location,
            image: req.file ? req.file.filename : "",
            createdAt: new Date(),
            categoryId: req.body.categoryId,
            sectionId: req.body.sectionId,
          });
      
          const product = await db.Product.findByPk(newProduct.id,{
            include: ["section", "category"],
          })
      
          return res.status(200).json({
            ok: true,
            data: product,
            msg: "Producto agregado con éxito",
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
            data: null,
          });
        }
    },
    updateProduct: async (req, res) => {
        try {   
          await db.Product.update(
            {
                name: req.body.name.trim(),
                price: +req.body.price,
                description: req.body.description?.trim(),
                serviceCharge: req.body.serviceCharge?+req.body.serviceCharge:0,
                date: req.body.date,
                address: req.body.address,
                location: req.body.location,
                image: req.file ? req.file.filename : "",
                createdAt: new Date(),
                categoryId: req.body.categoryId,
                sectionId: req.body.sectionId,
            },
            {
              where : {
                id : req.params.id
              }
            }
          );
      
          const product = await db.Product.findByPk(req.params.id,{
            include: ["section", "category"],
          })
      
          return res.status(200).json({
            ok: true,
            data: product,
            msg: "Producto actualizado con éxito",
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
            data: null,
          });
        }
    },
    deleteProduct: async (req,res) => {
        try {
          await db.Product.destroy({
            where : {
              id : req.params.id
            }
          })
          return res.status(200).json({
            ok: true,
            data: null,
            msg: "Producto eliminado con éxito",
          });
        } catch (error) {
          return res.status(error.status || 500).json({
            ok: false,
            msg: error.message || "Upss, hubo un error",
            data: null,
          });
        }
    },
}