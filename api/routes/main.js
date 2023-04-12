const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });

// router.get('/', homeController.getIndex)
router.post('/login', authController.postLogin)
router.post('/register', authController.postRegister)
router.get('/profile',authController.profileAuth)
router.post('/logout', authController.logout)


router.post('/submitContactForm', homeController.submitContactForm)
router.post('/post',uploadMiddleware.single('file'), homeController.createPost)
router.put('/post',uploadMiddleware.single('file'), homeController.updatePost)
router.get('/post',homeController.getPosts)
router.get('/post/:id',homeController.getPost)





module.exports = router