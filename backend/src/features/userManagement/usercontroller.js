// create functions to manipulate database
const { getAuthenticationToken } = require("../../utils/authentication");
const encryptPassword = require("../../utils/passwordEncryptDecrypt");
const User=require("./User");
const bcrypt = require('bcryptjs');
const nodemailer=require("nodemailer");
const Seller = require("./Seller");
require("dotenv").config();

exports.userRegistration=async (UserReq)=>{

    let response={};
    try {
        // fetching the user from mongo database to check whether the user already exists or not 
        let  userdb=await User.findOne({
        email:UserReq.email});

        if(userdb){
            return response={
                   responseStatus:false,
                   responseMessage:"User is already exists please try with other email Id!"
              }
            }
        console.log("userdb"+userdb);

        const bcryptPassword =await encryptPassword(UserReq.password);
        console.log("bcrypt:"+bcryptPassword);

        userdb=await User.create({
            email:UserReq.email,
            firstname:UserReq.firstname,
            lastname:UserReq.lastname,
            password:bcryptPassword

        })

        response={
            responseStatus:true,
            responseMessage:"User is successfully registered!"

        }

     }
    catch (error) {
        console.log(error);
        console.log(error.message);
        response={
            responseStatus:false,
            responseMessage:"Something went wrong!"

        }
    }

    return response

}
exports.userLogin=async (UserReq)=>{

    let response={}
    try {

        let userdb=await User.findOne({
            email:UserReq.email});
        if(userdb)
        {
            let passwordcheck=await bcrypt.compare(UserReq.password, userdb.password); 
            if(passwordcheck)
            {
                console.log(userdb._id);
                const user={
                    id:userdb.id
                }
                const token=getAuthenticationToken(user);
                console.log(token);
                response={
                    responseStatus:true,
                    responseMessage:"User is successfully logged in!",
                    responseToken:token
    
                }

            }
            else{
                return  response={
                    responseStatus:false,
                    responseMessage:"Incorrect email or password! try again!"
                }
            }
        }
        else{
            return  response={
                responseStatus:false,
                responseMessage:"Incorrect email or password! try again!"
            }

        }
        
    } catch (error) {
        console.log(error);
        response={
            responseStatus:false,
            responseMessage:"Something went wrong!",
         
        }

        
    }

    return response;


}


exports.sendOTP=async(req)=>{

    let response={}
    try {
        var minm = 100000;
        var maxm = 999999;
        var otp= Math.floor(Math.random() * (maxm - minm + 1)) + minm;

        const transport=nodemailer.createTransport({
            service:"hotmail",
            auth:{
                user:process.env.USEREMAIL,
                pass:process.env.USERPASSWORD
            }
           
        });
        // console.log(process.env.USEREMAIL)
        // console.log(process.env.USERPASSWORD)


        const maildetails={
            from:process.env.USEREMAIL,
            to:req.email,
            subject:"Forget Password",
            text:"Your one time password to recover your account is "+otp
        }
        console.log(maildetails);
        transport.sendMail(maildetails,function(err,info){
            if(err){
                console.log(err)
            }
            console.log(info.response);
        })


        response={
            responseStatus:true,
            responseMessage:"Successfully send the otp to your email id",
            responseOTP:otp
        }

        
    } catch (error) {
        console.log(error);
        response={
            responseStatus:false,
            responseMessage:"Something went wrong!",
         
        }

        
    }

    return response;

}

exports.recoverpasswordforUser=async(UserReq)=>{
   
    let response={}
    try {
        if(UserReq.password!=UserReq.confirmpassword){
            return  response={
                responseStatus:false,
                responseMessage:"New password does not match with the confirm password!"
            }

        }
        let userdb=await User.findOne({
            email:UserReq.email});
        console.log("userdb"+userdb)
        console.log("userreq"+JSON.stringify(UserReq));
      
        if(userdb){
            const bcryptPassword =await encryptPassword(UserReq.password);
            const user = await User.findByIdAndUpdate(userdb.id, { password:bcryptPassword }, { new: true })
   
            response={
                responseStatus:true,
                responseMessage:"Password is successfully changed!",
                responseData:user

            }

        }
        else{
            response={
                responseStatus:false,
                responseMessage:"User does not exists!"

            }

        }
        
    } catch (error) {
        console.log(error);
        response={
            responseStatus:false,
            responseMessage:"Something went wrong!",
         
        }
        
    }

    return response;

}






