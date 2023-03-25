

const express=require("express");
const { create_sprint } = require("../Controller/sprint");
const { Auth } = require("../middleware/Auth");


const sprintrouter=express.Router();


 
sprintrouter.post("/createsprint",Auth,create_sprint);

 


module.exports={
    sprintrouter
}

