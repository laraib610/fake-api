const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogs.controller');

// router.post('/signup', authController.signup);
router.post('/', blogController.CreateBlog);
router.get('/', blogController.getBlogs);
router.delete('/:id', blogController.deleteBlog);
router.patch('/:id', blogController.UpdateBlog);
router.get('/:userId/blogs', blogController.getBlogsByUserId);
router.patch('/:id/publish', blogController.publishBlog)

module.exports = router;