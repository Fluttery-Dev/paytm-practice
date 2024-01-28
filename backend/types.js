const Zod = require("zod");

const createUser = Zod.object({
    firstName: Zod.string(),
    lastName: Zod.string(),
    password: Zod.string().min(6),
    userName: Zod.string().min(6),
})


const verifyUser = Zod.object({

    password: Zod.string().min(6),
    userName: Zod.string().min(6),
})


module.exports = {createUser, verifyUser}