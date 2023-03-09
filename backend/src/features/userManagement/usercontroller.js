// create functions to manipulate database
const { getAuthenticationToken } = require("../../utils/authentication");
const encryptPassword = require("../../utils/passwordEncryptDecrypt");
const User=require("./User");
const bcrypt = require('bcryptjs');

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
        
        let passwordcheck=await bcrypt.compare(UserReq.password, userdb.password); 

        if(!userdb && !passwordcheck){

           return  response={
                responseStatus:false,
                responseMessage:"Incorrect email or password! try again!"
            }

        }
        console.log(userdb._id);
        const user={
            id:userdb.id
        }
        const token=getAuthenticationToken(user);
        console.log(token);
        if(userdb && passwordcheck ){
            response={
                responseStatus:true,
                responseMessage:"User is successfully logged in!",
                responseToken:token

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



