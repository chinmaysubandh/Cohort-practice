import mongoose, { mongo } from "mongoose";

const users =new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    
}, {
    timestamps:true,minimize:true
})


export const UserModel = mongoose.model('UserModel',users) 