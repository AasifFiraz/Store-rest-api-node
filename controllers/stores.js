const Store = require("../models/Stores")
const errorHandler = require("../middleware/error-handler")

const getAllProducts = async(req, res) => {
        const products = await Store.find({})

        if(products.length < 1) {
            throw new errorHandler("No products available. Please create some products", 404)
        }
        res.status(200).json({products})
}

const createProduct = async(req, res) => {
    
    isExistingProduct = await Store.findOne({name: req.body.name})
    if(isExistingProduct){
        throw new errorHandler("Product is already available", 409)
    }
    const product = await Store.create(req.body)
    res.status(201).json({ product })
}

const getSingleProduct = async(req, res) => {
        const product = await Store.findById(req.params.id)
        if(!product){
            throw new errorHandler(`unable to find product with id: ${req.params.id}`, 404)
        }
        res.status(200).json({product})
}

const updateProduct = async(req, res) => {
    const {name} = req.params
    const {price} = req.body
    const product = await Store.findOneAndUpdate({name}, {name, price}, {new: true, runValidators: true});
    
    if(!product) {
        const createProduct = await Store.create({
            name,
            price
        })
        return res.status(201).json(createProduct)
    }

    res.status(200).json({product})
}

const deleteProduct = async(req, res) => {
    try {        
        const product = await Store.findByIdAndDelete(req.params.id)
        if (!product) {
            throw new errorHandler(`unable to delete product with id: ${req.params.id}`, 404)
        }
        res.status(200).json({msg: "Product Deleted Successfully", status: "Success"})
    } catch (error) {
        throw new errorHandler(`An error occured when deleting product`, 404)
    }

}

module.exports = {getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct}