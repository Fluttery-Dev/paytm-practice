const express = require('express');
const { authMiddleware } = require('../middlewares/middleware');
const userSchema = require('../types');
const { User } = require('../db');
const { signJwt } = require('../jwt');

const userRouter = express.Router();


userRouter.post("/signup", async (req,res)=>{
    const payload = req.body;
    const payaloadResult = userSchema.safeParse(payload);

    if(!payaloadResult.success){
        res.status(411).json({
            msg: "Email already taken / Incorrect inputs",
        })
        return;
    }
  
    const existingUser = await User.findOne({
        userName: payload.userName
    })

    if (existingUser) {
        res.status(411).json({
            msg: "Email already taken/Incorrect inputs"
        })
        return;
    }

    await User.create({
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


userRouter.post("/signin", async (req,res)=>{
    const payload = req.body;
    const payaloadResult = userSchema.safeParse(payload);
    if(!payaloadResult.success){
        res.status(401).json({
            msg: "Error while logging in",
        })
        return;
    }

    const user = await User.findOne({userName: payload.userName, password: payload.password});
    console.log(user);

    if(!user){
        res.status(411).json({
            msg: "Wrong Username or password"
        })
        return;
    }

    const token = signJwt(payload.userName);
    res.json({
        msg: "Successfully Logged In",
        token: token,
    });
});


userRouter.put("/", authMiddleware, async (req,res)=>{

    const {_id, firstName, lastName, userName, password} = req.body;

    const update  = {};
    
    if(firstName) update.firstName = firstName;
    if(lastName) update.lastName = lastName;
    if(userName) update.userName = userName;
    if(password) update.userName = password;

    if(!userSchema.safeParse(update).success){
        res.status(411).json({
            msg: "Error while updating information"
        })
    }

    const newData = await User.findOneAndUpdate(
        { _id: _id }, // filter
        update, // update
        { new: true }, // options

    );

    res.json({
        msg: "done",
        newData: newData
    })
})
userRouter.get("/bulk", authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        users: users
    });
});

module.exports = userRouter;