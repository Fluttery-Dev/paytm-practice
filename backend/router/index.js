const express = require("express");
const userRouter = require("./user");

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
    res.json({
        msg: "welcome to the paytm router"
    })
})

rootRouter.use("/user", userRouter);

module.exports=rootRouter;