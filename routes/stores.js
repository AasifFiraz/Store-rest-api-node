const express = require("express")
const router = express.Router()
const verifyToken = require("../middleware/verify-jwt");

const { getAllProducts, createProduct, 
        deleteProduct, getSingleProduct, updateProduct } = require('../controllers/stores')

router.route('/').get(getAllProducts).post(verifyToken, createProduct)
router.route('/:id').get(getSingleProduct).delete(verifyToken, deleteProduct)
router.route('/:name').put(verifyToken, updateProduct)

module.exports= router