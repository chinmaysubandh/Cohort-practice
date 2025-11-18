const express = require('express')

const UserRouter = express.Router();

UserRouter.get('/', (req, res) => {
    try {
        res.status(200).json({message:'this route provides all possible users present in database'})
    } catch (error) {
        res.status(500).json({message: `internal server error${error}`})
    }
})

module.exports = UserRouter;