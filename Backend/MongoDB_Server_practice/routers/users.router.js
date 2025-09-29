import { Router } from "express";
import { UserDB } from "../models/users.model.js";
import mongoose from "mongoose";


export const UserRouter = Router();
//Get All Available users
UserRouter.get('/',async (req, res) => {
    
    const data = await UserDB.find({})
    res.json({data})
    
})
//Search User
UserRouter.get('/:username', async(req, res) => {
    const { username } = req.params;
    const searcheduser = await UserDB.findOne({ username })
    if (!searcheduser) {
       return res.json({message:"not found"})
    } 
    return res.json({User:searcheduser})
    
})

//Create user
UserRouter.post('/',async (req, res) => {
    const userbody = req.body;
    const newUser = new UserDB({
        userid:userbody.userid,
        username:userbody.username,
        email:userbody.email,
        age:userbody.age,
        password:userbody.password
    })
    await newUser.save();
    res.json({userbody})

})


//Update user
UserRouter.put('/', async(req, res) => {
    const { email } = req.body;
    const result =await UserDB.find({ email });
    res.json({result})
})

//Delete User 
UserRouter.delete('/:id', async(req, res) => {
    const { id } = req.params;
    await UserDB.findByIdAndDelete({ id })
    const data = await UserDB.find({});
    res.json({message:"user is deleted",data})
})