const express = require("express");
const router = express.Router();


const userRoutes = require("../features/userManagement");
const testRoutes = require("./../features/testing");
const accountRoutes=require("./../features/accountManagement");
const productRoutes=require("../features/product");
const cartRoutes=require("../features/cart");

router.use("/test", testRoutes);
router.use("/user", userRoutes);
router.use("/account",accountRoutes);
router.use("/products", productRoutes);
router.use("/cart",cartRoutes)


module.exports = router;
