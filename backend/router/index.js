const express = require("express");
const { verifyUser, createUser } = require("./types");
const { userModel } = require("./db");
const { signJwt, verifyJwt } = require("./jwt");
const userRouter = require("./user");

const router = express.Router();


router.use("/user", userRouter);

router.get("/", (req, res) => {
    res.json({
        msg: "welcome to the paytm router"
    })
})

module.exports={router}