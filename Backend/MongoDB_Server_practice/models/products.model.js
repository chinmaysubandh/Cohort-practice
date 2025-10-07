import mongoose, { model } from "mongoose";


const ProductModel = new mongoose.Schema({
    ProductName: { type: String, required: true },
    Category: { type: String, required: true },
    Price: { type: Number, required: true },
    Description: { type: String, required: true }
    
},{timestamps:true})

export const ProductModelData = mongoose.model("ProductModelData", ProductModel);