const { Product } = require('../database/models');

const createProduct = async (name, type, price, quantity, userInfo) => {

  const roleUser = userInfo.role
  if (roleUser === 'client') {
    return { code: 403, message: 'Only admins or sellers can add products' }
  };

  const checkFieldsNotNull = name && type && price;
  if (!checkFieldsNotNull) {
    return { code: 400, message: 'the fields "name", "type", "price" is required' };
  }

  if(typeof price !== 'number') {
    return { code: 400, message: 'the "name" field must be a number' };
  }

  await Product.create({ name, type, price, quantity });

  const newProduct = await Product.findOne({ where: { name } });
  return newProduct;
};

const addImageProduct = async (id, url_image, userInfo) => {
  const roleUser = userInfo.role
    if (roleUser === 'client') {
      return { code: 403, message: 'Only admins or sellers can add products' }
    };
  await Product.update({ url_image }, { where: { id } });
  const productWithImage = await Product.findByPk(id);
  return productWithImage;
};

const getProducts = async (userInfo) => {
  const roleUser = userInfo.role
    if (roleUser === 'client') {
      return { code: 403, message: 'Only admins or sellers can add products' }
    };
  const products = await Product.findAll();
  return products;
};

module.exports = {
  createProduct,
  addImageProduct,
  getProducts
}