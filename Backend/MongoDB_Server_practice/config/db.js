import mongoose from "mongoose";
import { configDotenv } from "dotenv";
configDotenv();


export const connectDB = async () => {
    const MongoDB_URI = process.env.MONGODB_URI;
    await mongoose.connect(MongoDB_URI);
    console.log('Database is connected');
    

}