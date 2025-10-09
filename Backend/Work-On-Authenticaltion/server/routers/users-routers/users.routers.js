import { Router } from "express";
import { UserModel } from "../../models/users.model.js";
import session from "express-session";
import cookieParser from "cookie-parser";

const UserRouter = Router();
//Get All Users
UserRouter.post('/login', async (req, res) => {
    try {
       const { username, password } = req.body;
    const FoundUser = await UserModel.findOne({ username: username })
    if (FoundUser && FoundUser.password == password) {
        
        req.session.userSession = FoundUser.username;
        return res.status(200).json({ message: "You are Authorized", user: FoundUser })
        
        
    } else {
        if (req.session.userSession) {
            req.session.destroy();
        }
       return res.json({message:'Authentication Failed please check your credentials'})
    }
    
    } catch (error) {
       return res.send(`internal server error ${error}`)
    }
})

//Post User
UserRouter.post('/register', async(req, res) => {
    try {
        const { username, password } = req.body;
        const newUser = await UserModel.insertOne({username:username,password:password})
        res.json({message:'new user is created',newUser})
    } catch (error) {
        res.send(`internal server error${error}`)
    }
})


//logout
UserRouter.get('/logout', (req, res) => {
    if (req.session.userSession) {
        req.session.destroy((err) => {
        if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.clearCookie('connect.sid');  // Added: Clear session cookie
    res.json({ message: 'You Logged Out' });  // Fixed typo: "Logged"
    });
    }
    res.send('You Loged Out')
})


export default UserRouter;