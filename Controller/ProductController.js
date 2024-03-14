const product = require("../model/product.model")

const getProduct=async (req, res) => {
    try {
        const Product = await product.find({})
        res.status(200).json(Product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const createProduct=async (req, res) => {
    try {
        const Product = await product.create(req.body)
        res.status(200).json(Product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getSingleProduct=async (req, res) => {
    try {
        const {id}=req.params
        const Product = await product.findById(id)
        res.status(200).json(Product)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}


const updateProduct=async (req,res)=>{
    try{
        const {id}=req.params
        console.log('hlo put');
        const Product=await product.findByIdAndUpdate(id,req.body);
        if(!Product){
            return res.status(404).json({message:"Product not Found"})
        }
        const Updated_product=await product.findById(id)
        res.status(200).json(Updated_product)

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteProduct=async (req,res)=>{
    try{
        const {id}=req.params
        console.log('hlo delete');
        const Product=await product.findByIdAndDelete(id);
        if(!Product){
            return res.status(404).json({message:"Product not Found"})
        }
        res.status(200).json("Product Deleted Successfully")

    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}
module.exports={getProduct,createProduct,getSingleProduct,updateProduct,deleteProduct}