import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    username: String,
    age: Number,
    email: String,
    password:Number
})

export const UserDB = mongoose.model("UserDB",UserModel)