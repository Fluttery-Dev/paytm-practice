
const jwt = require("jsonwebtoken");
const jwtPassword = '123456';

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