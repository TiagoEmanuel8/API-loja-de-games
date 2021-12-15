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
    return { code: 400, message: 'the "name" field must be a number' };
  }

  await Product.create({ name, type, price });
  return true
};

const addImageProduct = async (id, url_image) => {
  if(!url_image || url_image === '') {
    return { code: 400, message: 'the field "url_image" is required and cannot be empty' };
  }
  await Product.update({ url_image }, { where: { id } });
  const productWithImage = await Product.findOne({ where: { id } })
  return productWithImage;
};

module.exports = {
  createProduct,
  addImageProduct
}