import mongoose from "mongoose";

const Products =new mongoose.Schema({
    product_name: { type: String, required: true },
    description: { type: String, require: true },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    trending:{type:Boolean,default:false}
}, {Timestamp:true})


export const ProductModel = mongoose.model('ProductModel',Products)