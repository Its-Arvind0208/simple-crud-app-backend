const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: false
    },

},{timestamps:true})
const product=mongoose.model('product',ProductSchema)

module.exports=product