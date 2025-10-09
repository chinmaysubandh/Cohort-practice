import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

export const Connect_DB = async () => {
    const DB_URI = process.env.MONGODB_URI;
    console.log("Database is connected");
    try {
       await mongoose.connect(DB_URI)
    } catch (error) {
        console.log("Connection failed database");
        
    }
    
}