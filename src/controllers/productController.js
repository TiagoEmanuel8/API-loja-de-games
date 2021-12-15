const { productServices } = require('../services');

const createProduct = async (req, res) => {
  try {
    const { name, type, price, quantity } = req.body;
    const userInfo = req.user;
    const product = await productServices.createProduct(name, type, price, quantity, userInfo);
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
    const userInfo = req.user;
    const url_image = `http://localhost:3001/images/${filename}`;
    const upload = await productServices.addImageProduct(id, url_image, userInfo);
      if (upload.message) {
        return res.status(upload.code).json({ message: upload.message });
      }
    return res.status(200).json(upload);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const userInfo = req.user;
    const products = await productServices.getProducts(userInfo);
      if (products.message) {
        return res.status(products.code).json({ message: products.message });
      }
    return res.status(200).json(products);
  } catch(error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const userInfo = req.user;
    const product = await productServices.getProduct(id, userInfo);
      if (product.message) {
        return res.status(product.code).json({ message: product.message });
      }
    return res.status(200).json(product);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const editProduct = async (req, res) => {
  try {
    const userInfo = req.user;
    const { id } = req.params;
    const { name, type, price, quantity } = req.body;
    const edited = await productServices.editProduct(userInfo, id, name, type, price, quantity)
      if (edited.message) {
        return res.status(edited.code).json({ message: edited.message });
      }
    return res.status(200).json(edited);
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  addImageProduct,
  getProducts,
  getProduct,
  editProduct
};
