

const Address=require("./address");

const { json } = require("express");


const cart={totalcost:234,cartitems:[{productid:},{}]}

exports.createAddress = async (data) => {
  const response={};
    try {
      const address = new Address(data);
      await address.save();
      response={
        responseStatus:true,
        responseMessage:"Address saved sucessfully",
        responseData:data
    }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  };