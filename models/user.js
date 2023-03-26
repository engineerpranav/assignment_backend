
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please enter your email"]
    },
    password:{
        type:String,
        required:[true,"please enter your password"]
    },
    tasks:[Object]

})


const User=mongoose.model("User",userSchema);

module.exports={
    User
}



