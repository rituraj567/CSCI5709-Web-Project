// create functions to manipulate database
const { getAuthenticationToken } = require("../../utils/authentication");
const encryptPassword = require("../../utils/passwordEncryptDecrypt");
const User=require("./Seller");
const bcrypt = require('bcryptjs');
const Seller = require("./Seller");

exports.sellerRegistration=async(SellerReq)=>{

    let response={};
    try {
        // fetching the user from mongo database to check whether the user already exists or not 
        let  sellerdb=await Seller.findOne({
        email:SellerReq.email});

        if(sellerdb){
            return response={
                   responseStatus:false,
                   responseMessage:"Seller is already exists please try with other email Id!"
              }
            }
        console.log("sellerdb"+sellerdb);

        const bcryptPassword =await encryptPassword(SellerReq.password);
        console.log("bcrypt:"+bcryptPassword);

        sellerdb=await Seller.create({
            email:SellerReq.email,
            firstname:SellerReq.firstname,
            lastname:SellerReq.lastname,
            password:bcryptPassword

        })

        response={
            responseStatus:true,
            responseMessage:"Seller is successfully registered!"

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
exports.sellerLogin=async (SellerReq)=>{

    let response={}
    try {

        let sellerdb=await Seller.findOne({
            email:SellerReq.email});
        
        if(sellerdb)
        {
            let passwordcheck=await bcrypt.compare(SellerReq.password, sellerdb.password); 
            if(passwordcheck)
            {
                console.log(sellerdb.id);
                const seller={
                    id:sellerdb.id
                }
                const token=getAuthenticationToken(seller);
                console.log(token);

                response={
                    responseStatus:true,
                    responseMessage:"Seller is successfully logged in!",
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



