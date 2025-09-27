import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password:Number
})