

const mongoose=require("mongoose");

const sprintSchema=new mongoose.Schema({

    "name":{
        type:String,
        required:[true,"Please Enter sprint name"]
    },
     
    "owner":{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    "tasks":[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"task"
    }]
     
})


const Sprint=mongoose.model("Sprint",sprintSchema);

module.exports={
   Sprint
}



