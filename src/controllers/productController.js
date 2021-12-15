const { productServices } = require('../services');

const createProduct = async (req, res) => {
  try {
    const { name, type, price } = req.body;
    const userInfo = req.user;
    // const { filename } = req.file;
    // const url_image = `http://localhost:3001/src/uploads/${filename}`;
    const product = await productServices.createProduct(name, type, price, userInfo/* , url_image */);
      if (product.message) {
        return res.status(product.code).json({ message: product.message });
      }
    return res.status(201).json({ message: 'successfully registered product' });
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
      if (upload.message) {
        return res.status(upload.code).json({ message: upload.message });
      }
    return res.status(200).json(upload)
  } catch(error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};


module.exports = {
  createProduct,
  addImageProduct
};
