const Wishlist = require("./model");
const { ObjectId } = require("mongoose");

exports.getWishlist = async (req, res) => {
  try {
    const userId = req.user.id;
    const wishlist = await Wishlist.find({ userId: userId });
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.deleteFromWishlist = async (req, res) => {
  try {
    const id = req.user.id;
    const productId = req.body.productId;
    const wishlist = await Wishlist.updateOne(
      { userId: id },
      { $pull: { products: { productId: productId } } },
      { new: true }
    );
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    console.log(req.user.id);
    const id = req.user.id;
    const product = req.body.product;
    const wishlist = await Wishlist.updateOne(
      { userId: id },
      { $push: { products: product } },
      { new: true }
    );
    res.json(wishlist);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};
