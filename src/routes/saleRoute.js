const express = require('express');
const { saleControllers } = require('../controllers');
// const tokenValidation = require('../middlewares');

const router = express.Router();

router.get('/', saleControllers.getSales);

module.exports = router;
