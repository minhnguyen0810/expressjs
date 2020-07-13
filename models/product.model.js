var mongoose = require("mongoose");

var productSchema = new mongoose.Schema({
  fee: Number,
  name: String,
});

var Product = mongoose.model("Product", productSchema, "products");

module.exports = Product;
