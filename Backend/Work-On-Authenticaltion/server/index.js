import express from 'express';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { Connect_DB } from './config/db.connect.js';
import UserRouter from './routers/users-routers/users.routers.js';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { verifyuser } from './middlewares/verify.js';
configDotenv();
Connect_DB();
const app = express();
const PORT = process.env.PORT 
app.use(cors())
app.use(cookieParser())
app.use(session({
    secret: 'keyword',
    resave: false,
    saveUninitialized: false,
    cookie:{secure:true,maxAge:5000}
}))

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message:'welcome to blogposts'})
})

app.use('/users', UserRouter)

app.get('/products',verifyuser, (req, res) => {
    res.json({msg:'all products'})
})

app.listen(PORT, (req, res) => {
    console.log(`server is running on http://localhost:${PORT}`);
    
})