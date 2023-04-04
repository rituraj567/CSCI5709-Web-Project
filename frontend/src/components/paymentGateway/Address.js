import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";
import Header from "../Header";



function Address() {
  //   const [streetAddress, setStreetAddress] = useState('');
  //   const [city, setCity] = useState('');
  //   const [state, setState] = useState('');
  //   const [zipCode, setZipCode] = useState('');

  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("Token");

    const headers = {
      Authorization: token,
    };

    const data = {
      address1: address1,
      address2: address2,
      city: city,
      province: province,
      pincode: postalcode,
    };

    axios
      .post(
        process.env.REACT_APP_BACKEND_SERVER + "/payment/saveaddress",
        data,
        {
          headers: headers,
        }
      )
      .then((response) => {
        const output = response.data;

        if (output.responseStatus) {
          navigate('/checkout')

        }
      })
      .catch((response) => {
        console.log("Response" + response);
      });
  };

  return (
    <div><Header />
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '30%', margin: "auto", marginTop: "5rem" }}>
      <Typography variant="h4" sx={{display:'flex', justifyContent:'center'}}>Address</Typography>
      <TextField
        id="street_address"
        label="Street Address"
        variant="outlined"
        fullWidth
        // margin="normal"
        style={{ margin: '10px', maxWidth: '400px' }}
        value={address1}
        onChange={(event) => setAddress1(event.target.value)}
      />
      <TextField
        id="street_address"
        label="Street Address"
        variant="outlined"
        fullWidth
        style={{ margin: '10px', maxWidth: '400px' }}
        // margin="normal"
        value={address2}
        onChange={(event) => setAddress2(event.target.value)}
      />
      <TextField
        id="city"
        label="City"
        variant="outlined"
        fullWidth
        style={{ margin: '10px', maxWidth: '400px' }}
        // margin="normal"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <TextField
        id="state"
        label="State"
        variant="outlined"
        fullWidth
        style={{ margin: '10px', maxWidth: '400px' }}
        // margin="normal"
        value={province}
        onChange={(event) => setProvince(event.target.value)}
      />
      <TextField
        id="zip_code"
        label="Zip Code"
        variant="outlined"
        fullWidth
        style={{ margin: '10px', maxWidth: '400px' }}
        // margin="normal"
        value={postalcode}
        onChange={(event) => setPostalCode(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px', display: 'flex', alignSelf:'center' }}>
        Submit
      </Button>
    </form>
    </div>
    </div>
  );
}

export default Address;
