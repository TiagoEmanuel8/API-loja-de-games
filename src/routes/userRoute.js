const express = require('express');
const { userControllers } = require('../controllers');
const tokenValidation = require('../middlewares');

const router = express.Router();

router.post('/', userControllers.createUser);
router.get('/', tokenValidation.tokenValidation, userControllers.getUsers);

module.exports = router;
