const mongoose = require("mongoose")
const { Schema } = mongoose

const StoresSchema = new Schema({
    name: {
        type: String,
        trim: true,
        maxLength: [30, 'Product name cannot be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'Enter the product price']
    },
    feautured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported'
        }
    }
},
{timestamps: true}

)

module.exports = mongoose.model('Store', StoresSchema)