const express = require('express');
const { productControllers } = require('../controllers');
const tokenValidation = require('../middlewares');
// const { multer } = require('../utils');

const router = express.Router();

router.post('/', tokenValidation.tokenValidation, productControllers.createProduct);
router.post('/', /* multer.imageUpload(), */ productControllers.createProduct);


module.exports = router;
