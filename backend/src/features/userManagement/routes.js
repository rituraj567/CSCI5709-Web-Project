//import functions from controller

const express = require("express");
const router = express.Router();
const User=require("./User");
const { userRegistration, userLogin } = require("./usercontroller");

router.post("/register",async(req,res)=>{

  try {

    console.log(req.body);
    const data=req.body;
    const response =await userRegistration(data);

    res.json({
      status: response.responseStatus,
      message: response.responseMessage
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
    const response =await userLogin(data);
    

    res.json({
      status: response.responseStatus,
      message: response.responseMessage,
      token:response.responseToken
    });
  } catch (err) {
    res.json({
      status: "FAILED",
      message: err.message,
    });
  }
});

module.exports = router;
