const express = require("express");
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
  allProducts,
  productDetail,
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

//get all products
router.get("/products", allProducts);
//get detail of product
router.get("/product/:id", productDetail);
module.exports = router;
