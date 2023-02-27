import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../Main.css';
import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Radio } from "@mui/material";

function OTP(){


    const [otp, setOTP] = useState('');
    const[errorMessageforOTP,setErrorMessageforOTP]=useState('');
    const[submitted,setSubmitted]=useState(true);
    const [sendresponse,setSendresponse]=useState();


    const EMPTY_FIELD = "Field cannot be empty!";
    const OTP_REGEX=/^[0-9]{6}$/;
    const NO_ERROR = "";
    const OTP_ERROR="OTP should be of 6 charaters only!"
    const OTP_MISMATCH="OTP does not match please click on send button to receive new OTP!"
    const primaryColor = "#2B2D42";
    const selectedColor = "#EF233C";
    const navigate=useNavigate()

    const changesInputValues=(e)=>{

        const label=e.target.name;
        const value=e.target.value;


        if(label === "otp"){

            if(value){
                OTP_REGEX.test(value) ? setErrorMessageforOTP(NO_ERROR) : setErrorMessageforOTP(OTP_ERROR);

            }
            else{

                setErrorMessageforOTP(EMPTY_FIELD);

            }
            setOTP(value);
        }

        if(otp === '')
        {
            setSubmitted(true);
        }
        else{
            setSubmitted(false);
        }

      
    }
 
    const submit=(e)=>{
        e.preventDefault();
        if(otp==='456789'){

         navigate("/reset")
         setSendresponse(NO_ERROR);
         setErrorMessageforOTP(NO_ERROR);
        }
        else{
          setErrorMessageforOTP(OTP_MISMATCH);
          setSendresponse(NO_ERROR);
        }
    
    }

    const send=(e)=>{

        setSendresponse("OTP is send to your email please check your Registered Email!");
        setErrorMessageforOTP(NO_ERROR);
    };


    return(
        <div  id="login">

       

        <h2 style={{textAlign:"center"}}>OTP Page</h2>

        
        {/* <InputLabel required sx={{ ml: 10  }} className="label"><b>Email</b></InputLabel> */}
        <TextField    label="Enter OTP" sx={{ ml: 11 ,mb:1 }} margin="normal"     type="text" name="otp"  value={otp} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforOTP}
        </p>
        <p style={{color:"Blue",textAlign:"center" }}>
                    {sendresponse}
        </p>
        < Button  variant="contained"  sx={{ ml:11 ,mr:2, background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,}
                      }}disabled={submitted || (errorMessageforOTP )} className="button" onClick={submit}>Verify</Button>
        < Button  variant="contained" sx={{  background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,}
                       }}  className="button" onClick={send}>Send</Button>
       
    </div>

       
    )




} 

export default OTP;