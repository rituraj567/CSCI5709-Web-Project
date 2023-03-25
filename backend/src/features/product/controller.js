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
  

  

  
  