const { Sprint } = require("../models/sprint")


const create_sprint=async(req,res,next)=>{

try{

  let obj={
    "name":req.body.name,
    "owner":req.user._id
  }

  let sprint=await Sprint.create(obj);

  return res.status(201).send({
    success:true,
    message:"sprint created"
  })


}catch(err){

    return res.status(500).send({
        success:false,
        message:err.message
    })

}
   
}

module.exports={
    create_sprint
}