 import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    userid:Number,
    username: {type:String,required:true},
    age: Number,
    email: String,
    password: Number,
    userorder:{type:Object,default:{}}
}, {
    timestamps:true,minimize:true
})

export const UserDB = mongoose.model("UserDB",UserModel)