const { productServices } = require('../services');

const createProduct = async (req, res) => {
  try {
    const { name, type, price } = req.body;
    const userInfo = req.user;
    const product = await productServices.createProduct(name, type, price, userInfo);
      if (product.message) {
        return res.status(product.code).json({ message: product.message });
      }
    return res.status(201).json(product);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const addImageProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { filename } = req.file;
    const url_image = `http://localhost:3001/src/uploads/${filename}`;
    const upload = await productServices.addImageProduct(id, url_image);
    return res.status(200).json(upload);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async () => {};

module.exports = {
  createProduct,
  addImageProduct,
  getProducts
};
