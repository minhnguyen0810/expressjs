var Product = require("../../models/product.model");

module.exports.getProduct = async function (req, res) {
  let products = await Product.find();
  res.json(products);
};
