import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name:{ type: String, required:true},
    image:{ type: String, required:true},
    price:{ type: Number, default:0, required:true},
    category:[{_id: false,id: Number , name: String}],
    brand:{ type: String, required:true}

})


const productModel = mongoose.model("Product",productSchema);

export default productModel;