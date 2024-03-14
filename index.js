const express = require('express')
const mongoose = require('mongoose')
const product = require('./model/product.model.js')
const productRouter=require('./Routes/ProductsRoute.js')
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//route middleware
app.use('/api/products',productRouter)
// app.use('/api/product',)




app.get('/', (req, res) => {
    res.send('hlo fron node js')
})

// app.post('/api/product',(req,res)=>{
//     const data=req.body
//     console.log(data);
//     res.send(data)
// })


// ///create API
// app.post('/api/products')

// ///Read Api ALl
// app.get('/api/products')

// //read Api single
// app.get('/api/products/:id')

// //update api 
// app.put('/api/products/:id')


// ///delete a product
// app.delete('/api/products/:id')



mongoose.connect("mongodb+srv://Arvind:LD5nN2VEmjvu4kcf@backenddb.yitkfwh.mongodb.net/node_api?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log('Db connected');
    app.listen(3100, () => {
        console.log('Server started at 3100');
    })
}).catch((err) => {
    console.log(err);
    console.log('db not connected');
})