const express = require('express');

const userRouter = express.Router();


router.post("/createUser", async (req,res)=>{
    const payload = req.body;
    const payaloadResult = createUser.safeParse(payload);

    if(!payaloadResult.success){
        res.status(411).json({
            msg: "Email already taken / Incorrect inputs",
        })
        return;
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    await userModel.create({
        firstName : payload.firstName,
        lastName: payload.lastName,
        userName: payload.userName,
        password: payload.password,
    });

    
    const token = signJwt(payload.userName);
    res.json({
        msg: "Successfully Logged In",
        token: token,
    });
})


router.post("/signIn", (req,res)=>{
    const payload = req.body;
    const payaloadResult = verifyUser.safeParse(payload);
    if(!payaloadResult.success){
        res.status(401).json({
            msg: "Error while logging in",
        })
        return;
    }

    const token = signJwt(payload.userName);
    res.json({
        msg: "Successfully Logged In",
        token: token,
    });
});


router.put("/edit", async (req,res)=>{
    const token = req.headers.authorization;
    if(!verifyJwt(token)){
        res.status(401).json({
            msg: "Unauthorized",
        });
    }

    const payload = req.body;

    const newData = await userModel.findOneAndUpdate(
        { _id: payload._id }, // filter
        payload, // update
        { new: true }, // options

    );

    res.json({
        msg: "done",
        newData: newData
    })
})


module.exports = userRouter;