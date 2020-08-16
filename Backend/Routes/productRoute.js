import express from 'express'
import Product from '../Models/productModel'

const router = express.Router();


router.get("/", async (req,res)=>{
    const products = await Product.find({});
    res.send(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });

router.post("/", async (req,res)=>{
    const product = new Product ({
        name: req.body.name,
        image : req.body.image,
        price: req.body.price,
        category: {id :req.body.category.id, name: req.body.category.name},
        brand: req.body.brand 
        

    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({message:"Product created successfully", data: newProduct});
    }
    return res.status(500).send({message:"Error while creating the product"})

})

export default router;