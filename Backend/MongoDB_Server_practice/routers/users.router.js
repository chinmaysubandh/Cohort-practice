import { Router } from "express";

export const UserRouter = Router();

UserRouter.get('/', (req, res) => {
    res.json({ message: "Get all users data" });
})

UserRouter.post('/', (req, res) => {
    const userbody = req.body;
    res.json({userbody})

})