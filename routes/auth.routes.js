const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// router.post('/signup', authController.signup);
router.post('/sign-in', userController.signin);
router.post('/signUp', userController.signUp);




module.exports = router;