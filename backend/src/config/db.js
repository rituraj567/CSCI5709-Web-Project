const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const Rating = require("../features/rating/model");
const { Product, saveProducts } = require("../features/product/model");
mongoose
  .connect(
    "mongodb+srv://Group-10:r7VCsxNRGOrqQNT5@cluster0.vsbpsvc.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas: ", err);
  });
