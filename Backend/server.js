import express from 'express';
import data from './data'

import config from './config'
import mongoose from 'mongoose'
import productModel from './Models/productModel'

import bodyParser from 'body-parser';
import productRoute from './Routes/productRoute'
const mongodbUrl= config.MONGODB_URL

try{
    mongoose.connect(mongodbUrl,{useNewUrlParser:true, useUnifiedTopology:true})
    console.log("Connected to MongoDB")
}
catch(err){
    console.log(err.message)
}

const app = express();

app.use(bodyParser.json());
app.use("/api/products", productRoute)

app.get("/api/products/:id",(req,res)=>{
    const productId= req.params.id;
    const product = data.products.find(x=>x._id === productId);
    if(product)
        res.send(product)
    else
        res.status(404).send({msg:"Product not found!"})    
});



app.listen(5000,()=>{
    console.log("Server running ");
})