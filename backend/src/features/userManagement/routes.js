//import functions from controller

const express = require("express");
const { sellerRegistration, sellerLogin } = require("./sellercontroller");
const router = express.Router();
const User=require("./User");
const { userRegistration, userLogin } = require("./usercontroller");

router.post("/register",async(req,res)=>{

  try {

    console.log(req.body);
    const data=req.body;
    const userType=req.body.usertype;
    var response;
    if(userType.toLowerCase()==="seller")
    {
      response=await sellerRegistration(data);
    }
    else if(userType.toLowerCase()==="buyer")
    {
      response =await userRegistration(data);
    }
 

    res.status(200).json({
      status: response.responseStatus,
      message: response.responseMessage,
      userType:userType
  });
    
  } catch (error) {
    console.log(error);
    res.json({
      status: "FAILED",
      message: error.message,
    });
    
  }

});




router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const data=req.body;
    const userType=req.body.usertype;
    var response;
    if(userType.toLowerCase()==="seller")
    {
      response=await sellerLogin(data);
    }
    else if(userType.toLowerCase()==="buyer"){

      response =await userLogin(data);
    }
    

    res.status(200).json({
      status: response.responseStatus,
      message: response.responseMessage,
      token:response.responseToken,
      userType:userType
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
