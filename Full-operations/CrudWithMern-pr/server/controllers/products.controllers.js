import { ProductModel } from "../models/products.model.js"

export const getAllProducts = async(req, res) => {
    try {
        const Products = await ProductModel.find({})
        if (Products) {
          return  res.json({Products})
        } else {
          return  res.send('products are not present')
        }
    } catch (error) {
        
    }
}

export const getProductById=async(req, res) => {
    const reqId = req.params.id;
    try {
        const SingleProduct = await ProductModel.findById({ _id: reqId })
        if (SingleProduct) {
         return   res.status(200).json({products:SingleProduct})
        }
    } catch (error) {
      return  res.status(500).json({message:"internal server error"})
    }
}


export const CreateProduct =async(req, res) => {
    const {product_name,description,price,available,trending} = req.body;
    console.log(`info is ${product_name}`);
    
    try {
        
            const createdPr=await ProductModel.insertOne({ product_name, description, price, trending,available })
             return res.json({success:true,createdPr})
        
    } catch (error) {
       return res.send(`error occured ${error}`)
    }
}

export const DeleteProductById =  async(req, res) => {
    try {
        const ReqId = req.params.id;
        if (ReqId) {
            await ProductModel.findByIdAndDelete({_id: ReqId })
           return res.status(200).json({msg:"Deleted Successfully"})
        }
       return res.json({msg:"Product does not exists"})
    } catch (error) {
       return res.status(500).json({msg:"Something went wrong",error})
    }
}


export const UpdateProductById = async (req, res) => {
    const ReqId = req.params.id
    const {product_name,description,price,available,trending}=req.body
    try {
        if (ReqId) {
            await ProductModel.findByIdAndUpdate({ _id: ReqId }, { product_name, description, price, available, trending })
            res.status(200).json({msg:"Updated Successfully..."})
        }
    } catch (error) {
        
    }
}