const Store = require("../models/Stores")

const getAllProducts = async(req, res) => {
    try {
        const products = await Store.find({})
        res.status(200).json({products})
    } catch (error) {
        res.status(500).json(error)
    }
}

const createProduct = async(req, res) => {
    try {        
        const product = await Store.create(req.body)
        res.status(201).json({ product })
    } catch (error) {
        res.status(500).json(error)
    }
}

const getSingleProduct = async(req, res) => {
    try {        
        const product = await Store.findById(req.params.id)
        if(!product){
            return res.status(404).json({"error": `unable to find product with id: ${req.params.id}`})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateProduct = async(req, res) => {
    try {
        const product = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!product) {
            return res.status(404).json({error: `unable to update product with id: ${req.params.id}`})
        }
        res.status(200).json({product})
    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteProduct = async(req, res) => {
    try {
        const product = await Store.findByIdAndDelete(req.params.id)
        if (!product) {
            return res.status(404).json({"error": `unable to delete product with id: ${req.params.id}`})
        }
        res.status(200).json({status: "Success"})
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = {getAllProducts, createProduct, getSingleProduct, updateProduct, deleteProduct}