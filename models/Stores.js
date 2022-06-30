const mongoose = require("mongoose")
const { Schema } = mongoose

const StoresSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        maxLength: [10, 'Product name cannot be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'Enter the product price']
    },
},
{timestamps: true}

)

module.exports = mongoose.model('Store', StoresSchema)