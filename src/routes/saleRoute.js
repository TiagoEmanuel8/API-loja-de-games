const express = require('express');
const { saleControllers } = require('../controllers');
const middleware = require('../middlewares');

const router = express.Router();

router.post('/', middleware.tokenValidation, saleControllers.createSales);
router.get('/', middleware.tokenValidation, saleControllers.getSales);

module.exports = router;
