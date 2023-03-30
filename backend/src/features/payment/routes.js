// const authenticateUser = require("../../utils/authenticateUser");
const express = require("express");
const { createAddress} = require("./paymentcontroller");
const router = express.Router();


router.post("/saveaddress", async(req,res)=>{
    try{
        const data=req.body;
        const response= await createAddress(data);
        res.send(response)
    }
    catch(error){
        res.json({
            status:"Failed",
            message:error.message})

    }
})

