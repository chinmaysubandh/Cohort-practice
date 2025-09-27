const router = require('express');
 const UserRouter = router(router.Router());

UserRouter.get('/', (req, res) => {
    res.send("Users Data")
})


module.exports = UserRouter;




