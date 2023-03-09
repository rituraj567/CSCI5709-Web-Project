const express = require("express");
const router = express.Router();


const userRoutes = require("../features/userManagement");
const testRoutes = require("./../features/testing");
const accountRoutes=require("./../features/accountManagement");
const authenticateUser = require("../utils/authenticateUser");

// router.use("/user", userRoutes);
router.use("/test", testRoutes);
router.use("/user", userRoutes);
router.use("/account",accountRoutes);



module.exports = router;
