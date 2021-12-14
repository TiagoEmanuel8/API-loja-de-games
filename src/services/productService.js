const { Product } = require('../database/models');

const createProduct = async (name, type, price/* , url_image */) => {

  await Product.create({ name, type, price/* , url_image */ });
  return true
};

module.exports = {
  createProduct,
}