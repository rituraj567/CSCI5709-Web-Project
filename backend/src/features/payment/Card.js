const mangoose = require("mongoose");
const Schema = mangoose.Schema;

const CardScheme = new Schema({
  number: {
    type: Number,
    required: true,
    unique: true
  },
  date: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  }
});

const Card = mangoose.model("Card", CardScheme);
module.exports = Card;
