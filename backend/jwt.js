
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");
const jwtPassword = JWT_SECRET;

function signJwt(userName){
    const token = jwt.sign({
        userName: userName,
    }, jwtPassword);

    return token;
}
function verifyJwt(token){
    try {
        jwt.verify(token, jwtPassword);
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {verifyJwt, signJwt}