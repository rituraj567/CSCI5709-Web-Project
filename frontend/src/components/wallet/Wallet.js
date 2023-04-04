import React, { useEffect, useState } from 'react'
import axios from "axios";

function Wallet() {
  const [accountbalance, setAccountBalance] = useState("");
  useEffect(()=>{
    const token = localStorage.getItem("Token");

    const headers = {
      Authorization: token,
    };

    axios
      .get(
        process.env.REACT_APP_BACKEND_SERVER +
          "/wallet/getwalletdetails",
        {
          headers: headers,
        }
      )
      .then((response) => {
        const output = response.data;
        console.log(output);

        if (output.responseStatus) {
          setAccountBalance(output.responseData.accountbalance);
        }
      })
      .catch((response) => {
        console.log("response" + response);
      });

})
  return (
    <div>{accountbalance}</div>
  )
}

export default Wallet