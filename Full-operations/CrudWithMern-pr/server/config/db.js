import mongoose from "mongoose"
import { config } from "dotenv";
config()

export const connect_DB = async () => {
    try {
        const MongoDB_URI = process.env.MongoDB_URI;
         
        if (MongoDB_URI) {
           
            
            await mongoose.connect(MongoDB_URI)
        } else {
            console.log('failed to connect database')
        }
    } catch (error) {
        console.log(error);
        
    }
}