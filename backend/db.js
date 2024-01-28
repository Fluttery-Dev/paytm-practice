const { default: mongoose } = require("mongoose");


mongoose.connect("mongodb+srv://flutterydev:Allem%40080603@cohort.3xtdu8e.mongodb.net/?retryWrites=true&w=majority");

const userSchema = mongoose.Schema({
    firstName:String,
    lastName: String,
    password: String,
    userName:  String,
})

const userModel = mongoose.model('User',userSchema);

module.exports= {userModel};