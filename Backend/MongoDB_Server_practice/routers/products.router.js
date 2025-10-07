import { json, Router } from "express";
import { ProductModelData } from "../models/products.model.js";
import express from 'express'

export const ProductRouter = Router();
ProductRouter.use(express.json())

//Get Prouducts
ProductRouter.get('/', async(req, res) => {
    const AllProuducts = await ProductModelData.find({})
    res.cookie('name','All-Products',{maxAge:50000})
    res.json({Products:AllProuducts})
    
})
//Get One product by id
ProductRouter.get('/:productid', async(req, res) => {
    const productid = req.params.productid;
    
    
    const FoundProduct = await ProductModelData.findOne({ _id: productid});
    
    res.json({Product : FoundProduct})
})
//To clear cookie
ProductRouter.get('/clear-cookie', (req, res) => {
    res.clearCookie('name')
    res.send("cookie is cleared")
})
// Search by category
ProductRouter.get('/', async(req, res) => {
    const Category = req.query.Category || '';
    const Search = req.query.search;
    const FilteredData = await ProductModelData.find({ Category: Category, ProductName: Search })
    
    res.json({Products : FilteredData})

})

//Create Products
ProductRouter.post('/', async(req, res) => {
    const { ProductName, Price, Category, Description } = req.body;
    const Body= await ProductModelData.insertOne({ ProductName: ProductName, Price: Price, Category: Category, Description: Description })
    res.json({message:"Products Created successfully",ProductBody:Body})
})


//Delete Products
ProductRouter.delete('/delete/:id',async (req, res) => {
    const Product_id = req.params.id
    try {
        await ProductModelData.findByIdAndDelete({ _id: Product_id })
        res.json({message:"Product is delelted",success : true})
    } catch (error) {
        res.json({error :"internal server error"})
    }
})