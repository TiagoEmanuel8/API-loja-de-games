const express = require('express');
const { productControllers } = require('../controllers');
// const { multer } = require('../utils');

const router = express.Router();

router.post('/', /* multer.imageUpload(), */ productControllers.createProduct);

module.exports = router;
