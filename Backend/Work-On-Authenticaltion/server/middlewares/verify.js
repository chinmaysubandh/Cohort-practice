import session from "express-session";
export const verifyuser = (err,req,res,next) => {
    if (!req.session.userSession) {
       return res.send('You are not Authorized to acesses this route')
    }
    next();
}