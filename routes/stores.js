const express = require("express")
const router = express.Router()
const { getAllProducts, createProduct, 
        deleteProduct, getSingleProduct, updateProduct } = require('../controllers/stores')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getSingleProduct).delete(deleteProduct).put(updateProduct)

module.exports= router