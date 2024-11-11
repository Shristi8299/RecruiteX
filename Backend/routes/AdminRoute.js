const express=require("express")
const AdminRoute=express.Router()
const {AdminTable} =require('../models/AdminModel');
const {seekerTable}=require('../models/seekerModel');
const {recruiterTable}=require('../models/recruiterModel');


//Admin registration route
AdminRoute.post("/admin-register",async(req,res)=>{
  const {name,email,contact,password,location} =req.body;
  let img=req.files.img;
    img.mv("uploads/"+img.name,(err)=>{
        if(err){
            res.send(err)
        }
    })
   const data=  new AdminTable({name: name,img:img.name,email:email,contact:contact,password:password,location:location})
   const result= await data.save()
       res.json({
        code :200,
        data:result
       })
})


//Admin login route
AdminRoute.post("/admin-login", async (req, res) => {
const {email,password}=req.body


      const result = await AdminTable.findOne({email,password}); 
      if(result) {
      res.json({
        code: 200,
        message: "Login Successfull !...",
        data:result
      });
    } else {
      res.json({
        code: 404,
        message: "Invalid Email or Password"
    
      });
    }
  });

// Admin seekerlist route

AdminRoute.get("/admin-seekerlist",async(req,res)=>{
   try{
    const result= await seekerTable.find();
    res.json({
      code:200,
      message:"Data found Successfull",
      data:result
    })

   } catch(err){
    console.log(err)
   }
})  


//Admin recuiter list route
AdminRoute.get("/admin-recruiterlist",async(req,res)=>{
  try{
   const result= await recruiterTable.find();
   res.json({
     code:200,
     message:"Data found Successfull",
     data:result
   })

  } catch(err){
   console.log(err)
  }
}) 

//Admin profile update route
AdminRoute.put("/admin-update/:_id",async(req,res)=>{
  const _id=req.params._id;
  const {name,email,contact,password,location}=req.body;
  let img=req.files.img;
  img.mv("uploads/"+img.name,(err)=>{
    if(err){
        res.send(err)
    }
})
  
const result=await AdminTable.findByIdAndUpdate({_id:_id},{
       $set:{name,email,contact,password,location,img:img.name}},
      {new:true}
)
 res.json({
  code:200,
  message:"Data updated Successfull",
  data:result

 })

})


//Admin block-unblock seeker route

AdminRoute.put("/admin-seekerblock/:_id",async(req,res)=>{
      const _id=req.params._id;
      const status=req.body.status;
      const result=await seekerTable.findByIdAndUpdate({_id:_id},{
        $set:{isBlock:status}},{new:true})
      res.json({
        code:200,
        message:"Data updated Successfull",
        data:result
      })
})


//Admin bock-unblock recruiter route
AdminRoute.put("/admin-recruiterblock/:_id",async(req,res)=>{
  const _id=req.params._id;
  const status=req.body.status;
  const result=await recruiterTable.findByIdAndUpdate({_id:_id},{
    $set:{isBlock:status}},{new:true})
  res.json({
    code:200,
    message:"Data updated Successfull",
    data:result
  })
})

 module.exports={AdminRoute}