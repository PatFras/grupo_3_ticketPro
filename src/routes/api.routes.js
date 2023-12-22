const express = require("express");
const upload = require("../middlewares/uploadApi");
const {
  checkEmail,
  usersController,
  userController,
} = require("../controller/APIs/usersApiController");
const {
  getCart,
  addItemToCart,
  removeItemToCart,
  deleteItemToCart,
  clearCart,
} = require("../controller/APIs/cartApiController");
const {
  getCategoriesWithProducts,
  getCategories,
  totalProductInDB,
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getSections,
} = require("../controller/APIs/productsApiController");
const router = express.Router();

//get check email
router.get("/check-email", checkEmail);
//get all users
router.get("/users", usersController);
//get user
router.get("/users/:id", userController);
//get cart - add item - remove item - delete item - clear cart
router.get("/cart", getCart);
router.post("/cart", addItemToCart);
router.delete("/cart", removeItemToCart);
router.delete("/cart/item", deleteItemToCart);
router.delete("/cart/all", clearCart);
//get sections
router.get('/sections',getSections);
//get categories
router.get('/categories/products', getCategoriesWithProducts);
router.get('/categories', getCategories);
//CRUD products
router.get('/products/count',totalProductInDB);
router.get('/products',getAllProducts);
router.post('/products',upload.single("image"),createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id',deleteProduct);

module.exports = router;
