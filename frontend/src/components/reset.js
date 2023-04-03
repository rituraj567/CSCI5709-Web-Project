import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../Main.css';
import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Radio } from "@mui/material";

function Reset(){


    const [password, setPassword] = useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[errorMessageforPassword,setErrorMessageforPassword]=useState('');
    const[errorMessageforConfirmPassword,setErrorMessageforConfirmPassword]=useState('');
    const[submitted,setSubmitted]=useState(true);



    const EMPTY_FIELD = "Field cannot be empty!";
    const PASSWORD_REGEX=/^[A-Za-z0-9\d@$!%*#?&]{8,}$/;
    const PASSWORD_ERROR="Password should be alphanumeric and should be of minimum 8 charaters"
    const CONFIRMPASSWORD_ERROR="Password and confirm password should be same"
    const NO_ERROR = "";
    const primaryColor = "#2B2D42";
    const selectedColor = "#EF233C";

    const navigate=useNavigate()

    const changesInputValues=(e)=>{

        const label=e.target.name;
        const value=e.target.value;


        if(label === "password"){

            if(value){
                PASSWORD_REGEX.test(value) ? setErrorMessageforPassword(NO_ERROR) : setErrorMessageforPassword(PASSWORD_ERROR);

            }
            else{

                setErrorMessageforPassword(EMPTY_FIELD);

            }
            setPassword(value);
        }

        if(label === "confirmpassword"){
            if(value)
            {
                if(value===password)
                {
                    setErrorMessageforConfirmPassword(NO_ERROR)
                }
                else{
                    setErrorMessageforConfirmPassword(CONFIRMPASSWORD_ERROR)

                }
            }
            else{
                setErrorMessageforConfirmPassword(EMPTY_FIELD)
            }

            setConfirmPassword(value);
        }

        if(password === ''|| confirmPassword==='')
        {
            setSubmitted(true);
        }
        else{
            setSubmitted(false);
        }

      
    }
 
    const submit=(e)=>{
        e.preventDefault();
        
        alert("Password is succesfully changed!")
        navigate("/login")
    
    }

    return(
        <div  id="login">

        <h2 style={{textAlign:"center"}}>Reset Page</h2>
 
        {/* <InputLabel required sx={{ ml: 10  }} className="label"><b>Email</b></InputLabel> */}
        <TextField    label="Password" sx={{ ml: 11 ,mb:1 }} margin="normal" type="password" name="password"  value={password} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforPassword}
        </p>
        <TextField    label="Confirm Password" sx={{ ml: 11 ,mb:1 }} margin="normal" type="password" name="confirmpassword"  value={confirmPassword} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforConfirmPassword}
        </p>
        < Button  variant="contained"  sx={{ ml:19 ,mr:2, background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,}
                      }}disabled={submitted || (errorMessageforPassword || errorMessageforConfirmPassword )} className="button" onClick={submit}>Submit</Button>
       
    </div>

       
    )




} 

export default Reset;