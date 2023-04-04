const express = require("express");
const authenticateUser = require("../../utils/authenticateUser");
const router = express.Router();

const productController = require("./controller");

router.get("/",authenticateUser, productController.getProducts);

router.get("/:id",authenticateUser, productController.getProductById);

router.post("/", authenticateUser,productController.createProduct);

router.put("/:id",authenticateUser, productController.updateProduct);

router.delete("/:id",authenticateUser, productController.deleteProduct);

router.get("/:id/ratings",authenticateUser, productController.getRatings);
router.post("/:id/rating", authenticateUser,productController.addRating);

router.put("/:id/rating/:ratingId", authenticateUser,productController.updateRating);

router.delete("/:id/rating/:ratingId",authenticateUser, productController.deleteRating);

router.post("/filter", authenticateUser, productController.filterProducts);

module.exports = router;
