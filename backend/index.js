const express = require("express");
const { verifyUser, createUser } = require("./types");
const { userModel } = require("./db");
const { signJwt, verifyJwt } = require("./jwt");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        msg: "welcome to the paytm app"
    })
})

app.post("/createUser", async (req,res)=>{
    const payload = req.body;
    const payaloadResult = createUser.safeParse(payload);

    if(!payaloadResult.success){
        res.status(401).json({
            msg: "Bad Input",
        })
        return;
    }

    await userModel.create({
        firstName : payload.firstName,
        lastName: payload.lastName,
        userName: payload.userName,
        password: payload.password,
    });

    res.json({
        msg: "Account created successfully",
    })
})


app.post("/signIn", (req,res)=>{
    const payload = req.body;
    const payaloadResult = verifyUser.safeParse(payload);
    if(!payaloadResult.success){
        res.status(401).json({
            msg: "Unauthorized",
        })
        return;
    }

    const token = signJwt(payload.userName);
    res.json({
        msg: "Successfully Logged In",
        token: token,
    });
});


app.put("/edit", async (req,res)=>{
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

app.listen(3000);