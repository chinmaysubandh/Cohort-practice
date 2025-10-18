import express from 'express';
import { config } from 'dotenv';
import { connect_DB } from './config/db.js';
import ProductRouter from './routers/Product.router.js';
import cors from 'cors'
config()
const app = express();
const PORT = process.env.PORT;



await connect_DB();

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send('Home route')
})
app.use('/products',ProductRouter)





app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})