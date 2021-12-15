const express = require('express');
const { productControllers } = require('../controllers');
const tokenValidation = require('../middlewares');
const { multer } = require('../utils');

const router = express.Router();

router.post('/', tokenValidation.tokenValidation, productControllers.createProduct);
router.put('/:id/image', tokenValidation.tokenValidation, multer.imageUpload(), productControllers.addImageProduct);
router.get('/:id/image', multer.imageUpload())
router.get('/', tokenValidation.tokenValidation, productControllers.getProducts);
router.get('/:id', tokenValidation.tokenValidation, productControllers.getProduct);
router.put('/:id', productControllers.editProduct);

module.exports = router;
