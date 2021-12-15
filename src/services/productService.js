const { Product } = require('../database/models');

const createProduct = async (name, type, price, userInfo) => {

  const roleUser = userInfo.role
  if (roleUser === 'client') {
    return { code: 403, message: 'Only admins or sellers can add products' }
  };

  const checkFieldsNotNull = name && type && price;
  if (!checkFieldsNotNull) {
    return { code: 400, message: 'the fields "name", "type", "price" is required' };
  }

  if(typeof price !== 'number') {
    return { code: 400, message: 'the name field must be a number' };
  }

  await Product.create({ name, type, price });
  return true
};

const addImageProduct = async (id, url_image) => {
  await Product.update({ url_image }, { where: { id } });
  return true
};

module.exports = {
  createProduct,
  addImageProduct
}