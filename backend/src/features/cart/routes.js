const Cart = require("./model");
const express = require("express");
const router = express.Router();
const cartController = require("./controller");

router.post("/", cartController.addToCart);

router.delete("/:userId/:productId", cartController.removeFromCart);

router.get("/:userId", cartController.getCartItems);

module.exports = router;
