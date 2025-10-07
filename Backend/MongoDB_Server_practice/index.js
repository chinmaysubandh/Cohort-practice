import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { configDotenv } from 'dotenv';
import { connectDB } from './config/db.js';
import { UserRouter } from './routers/users.router.js';
import cookieParser from 'cookie-parser';
import { ProductRouter } from './routers/products.router.js';
import session from 'express-session';

const app = express();
configDotenv()
await connectDB();
 
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('base route')
})
app.use('/users', UserRouter)
app.use('/products',ProductRouter)







app.listen(PORT, (req, res) => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})
