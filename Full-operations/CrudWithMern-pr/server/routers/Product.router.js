import { Router } from "express";
import { CreateProduct, DeleteProductById, getAllProducts, getProductById, UpdateProductById } from "../controllers/products.controllers.js";

const ProductRouter = Router();


ProductRouter.get('/',getAllProducts)
ProductRouter.get('/:id', getProductById)
ProductRouter.post('/', CreateProduct)
ProductRouter.delete('/:id', DeleteProductById)
ProductRouter.put('/:id', UpdateProductById)






export default ProductRouter;