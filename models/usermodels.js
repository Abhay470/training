const mongoose= require("mongoose");
const userschema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    phonenumber:{
        type:String
    },
    age:{
        type:String
    },
});
const usermodel= mongoose.model("users",userschema)
module.exports={usermodel};