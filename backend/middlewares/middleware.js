const { User } = require("../db");
const {verifyJwt } = require("../jwt");

function authMiddleware(req,res,next) {

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(404).json({
            msg: "Authorisation token not found"
        })
    }

    const token = authHeader.split(" ")[1];

    try {        
    const userName = verifyJwt(token);
    req.userName = userName;
    next();
    } catch (error) {
        return res.status(403).json({msg:"wrong authorisation token"});
    }
}


module.exports = {authMiddleware}