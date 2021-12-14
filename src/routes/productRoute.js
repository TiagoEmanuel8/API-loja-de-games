const express = require('express');
const { productControllers } = require('../controllers');

const router = express.Router();

router.post('/', productControllers.createProduct);

module.exports = router;
