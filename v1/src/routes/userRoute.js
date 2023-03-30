const express = require('express');
const { userControllers } = require('../controllers');
const tokenValidation = require('../middlewares');

const router = express.Router();

router.post('/', userControllers.createUser);
router.get('/', tokenValidation.tokenValidation, userControllers.getUsers);
router.get('/:id', tokenValidation.tokenValidation, userControllers.getUser);
router.put('/:id', tokenValidation.tokenValidation, userControllers.editUser);
router.delete('/:id', tokenValidation.tokenValidation, userControllers.deleteUser);

module.exports = router;
