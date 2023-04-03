require("dotenv").config();

const mongoose = require("mongoose");
const connectMongo = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Group-10:r7VCsxNRGOrqQNT5@cluster0.vsbpsvc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log(err));
};

module.exports = connectMongo;
