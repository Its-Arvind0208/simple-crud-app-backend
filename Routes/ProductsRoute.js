const express=require('express')
const { getProduct, createProduct, getSingleProduct, updateProduct, deleteProduct } = require('../Controller/ProductController')
const router=express.Router()


///Read Api ALl
router.get('/', getProduct)

//create product api
router.post('/',createProduct)

//read single product
router.get('/:id',getSingleProduct)

//update product api
router.put('/:id',updateProduct)

//delete product
router.delete('/:id',deleteProduct)


module.exports=router