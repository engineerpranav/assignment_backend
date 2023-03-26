
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
    tasks:[{
        "title":String,
        "assignee":String,
        "owner":String,
        "sprint":String,
        "status":String,
        "type":String
        
    }]

})


const User=mongoose.model("User",userSchema);

module.exports={
    User
}



