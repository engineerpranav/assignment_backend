

const mongoose=require("mongoose");
const config = require("../Config/config");

const ConnectDataBase=async()=>{

    console.log(config.DB_CONNECTION_URL);

    let result=await mongoose.connect(config.DB_CONNECTION_URL);

    return result;

}

module.exports={
    ConnectDataBase
}