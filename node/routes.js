const express = require('express');
const router = express.Router()
const ProductController = require('./controllers/controller')
const UserController = require('./controllers/usuario.controller');
const { verifyToken } = require('./middlewares/verifyToken');

router.get('/product',ProductController.getProduct)
router.post('/product',ProductController.addProduct)
router.delete('/product:id',ProductController.deleteProduct)
router.post('/product:id',ProductController.updateProduct)
router.get('/product:id',ProductController.getProductById)

router.get('/usuario',UserController.getUser)
router.get('/usuario:id',UserController.getUserById)
router.post('/usuario:id',UserController.updateUser)
router.delete('/usuario:id',UserController.deleteUser)

router.post('/login', verifyToken ,UserController.logIn)
router.post('/signup',UserController.addUser)

module.exports = router;