const express = require('express');
const router = express.Router();

const productController = require('./controller');

router.get('/', productController.getProducts);


router.get('/:id',productController.getProductById);


router.post('/',productController.createProduct);


router.put('/:id',productController.updateProduct);


router.delete('/:id', productController.deleteProduct);


router.post('/:id/rating', productController.addRating);


router.put('/:id/rating/:ratingId', productController.updateRating);
  

  router.delete('/:id/rating/:ratingId', productController.deleteRating);
  



module.exports = router;


