const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.delete('/:id', userController.deleteUser);
router.patch('/:id', userController.UpdateUser);
router.get('/:id/user', userController.getUserById);


module.exports = router;