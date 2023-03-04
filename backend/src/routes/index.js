const express = require("express");
const router = express.Router();

const userRoutes = require("./../features/user");
const testRoutes = require("./../features/testing");

// router.use("/user", userRoutes);
router.use("/test", testRoutes);
router.use("/asd", testRoutes);
router.use("/teasdasst", testRoutes);

module.exports = router;
