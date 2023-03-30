const Product = require('./model');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.createProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.json(newProduct);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.updateProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      Object.assign(product, req.body);
      await product.save();
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
  exports.deleteProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).send('Product not found');
      }
      await product.remove();
      res.send('Product deleted successfully');
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };
  
exports.addRating = async (req, res) => {
  const productId = req.params.id;
  const { rating, comment } = req.body;

  try {
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const ratingId = Date.now(); 
    const newRating = { rating, comment };
    product.ratingsData[0].ratingDesc.ratings.push(newRating); 
    product.totalRating += 1; 
    product.averageRating = calculateAverageRating(product.ratingsData[0].ratingDesc.ratings); 

    await product.save();

    res.json({ message: 'Rating added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.updateRating = async (req, res) => {
  const productId = req.params.id;
  const ratingId = req.params.ratingId;
  const { rating, comment } = req.body;

  try {
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const ratingIndex = product.ratingsData[0].ratingDesc.ratings.findIndex(
      (rating) => rating.ratingId.toString() === ratingId.toString()
    );

    if (ratingIndex === -1) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    product.ratingsData[0].ratingDesc.ratings[ratingIndex] = { rating, comment, ratingId }; 
    product.averageRating = calculateAverageRating(product.ratingsData[0].ratingDesc.ratings); 
    await product.save();

    res.json({ message: 'Rating updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.deleteRating = async (req, res) => {
  const productId = req.params.id;
  const ratingId = req.params.ratingId;

  try {
    const product = await Product.findOne({ productId });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const ratingIndex = product.ratingsData[0].ratingDesc.ratings.findIndex(
      (rating) => rating.ratingId.toString() === ratingId.toString()
    ); 

    if (ratingIndex === -1) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    product.ratingsData[0].ratingDesc.ratings.splice(ratingIndex, 1); 
    product.averageRating = calculateAverageRating(product.ratingsData[0].ratingDesc.ratings); 

    await product.save();

    res.json({ message: 'Rating deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}

exports.getRatings = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ productId });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product.ratingsData[0].ratingDesc.ratings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}


function calculateAverageRating(ratings) {
  const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);
  const averageRating = totalRating / ratings.length;
  return parseFloat(averageRating.toFixed(1));
}
  

  
  