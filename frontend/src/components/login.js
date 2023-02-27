import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import '../Main.css';
import { Button, Checkbox, FormControlLabel, Grid, InputLabel, Radio } from "@mui/material";

function Login(){


    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[errorMessageforEmail,setErrorMessageforEmail]=useState('');
    const[errorMessageforPassword,setErrorMessageforPassword]=useState('');
    const[submitted,setSubmitted]=useState(true);
    const [userType,setUserType]=useState('Buyer');
    const[isUserLoggedIn,setIsUserLoggedIn]=useState(localStorage.getItem(localStorage.getItem("isUserLoggedIn") || false))

    const EMPTY_FIELD = "Field cannot be empty!";
    const EMAIL_REGEX=/^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
    const PASSWORD_REGEX=/^[A-Za-z0-9\d@$!%*#?&]{8,}$/;
    const EMAIL_ERROR="Email is not valid!"
    const NO_ERROR = "";
    const PASSWORD_ERROR="Password should be alphanumeric and should be of minimum 8 charaters"
    const primaryColor = "#2B2D42";
    const selectedColor = "#EF233C";
  

    const navigate=useNavigate()

    const changesInputValues=(e)=>{

        const label=e.target.name;
        const value=e.target.value;

        if(label==="userType"){
            setUserType(value);
        }
        

        if(label === "email"){

            if(value){
                EMAIL_REGEX.test(value) ? setErrorMessageforEmail(NO_ERROR) : setErrorMessageforEmail(EMAIL_ERROR);

            }
            else{

                setErrorMessageforEmail(EMPTY_FIELD);

            }
            setEmail(value);
        }

        if(label === "password"){
            if(value){
                PASSWORD_REGEX.test(value) ? setErrorMessageforPassword(NO_ERROR) : setErrorMessageforPassword(PASSWORD_ERROR);
            }
            else{
                setErrorMessageforPassword(EMPTY_FIELD);
            }


            setPassword(value);
        }

        


        if(email === '' || password ==='')
        {
            setSubmitted(true);
        }
        else{
            setSubmitted(false);
        }

      
    }
 
    const submit=(e)=>{
        e.preventDefault();
        // const user = api call
        // if(user){

        // }
        setIsUserLoggedIn(true);
        localStorage.setItem("isUserLoggedIn",true);
        console.log(localStorage.getItem("isUserLoggedIn"));

       
        // navigate("/profile",{state:{
        //     firstName: firstName,
        //     lastName:lastName,
        //     email:email
        
        // }})
      

    }


    return(
        <div  id="login">

       

        <h2 style={{textAlign:"center"}}>Login</h2>

        <Radio sx={{ ml: 12  ,mb:1}}  type="radio" name="userType" value="Buyer"  id="Buyer" checked={userType === "Buyer"} onChange={changesInputValues}/>
        <label htmlFor="Buyer">Buyer</label>

        <Radio  sx={{ ml: 3 ,mb:1 }}type="radio" name="userType"  value="Seller" id="Seller" checked={userType === "Seller"} onChange={changesInputValues}/>
        <label  htmlFor="Seller">Seller</label><br></br>
        
        {/* <InputLabel required sx={{ ml: 10  }} className="label"><b>Email</b></InputLabel> */}
        <TextField    label="Email Address" sx={{ ml: 11 ,mb:1 }} margin="normal"     type="text" name="email"  value={email} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforEmail}
        </p>

        {/* <InputLabel  required sx={{ ml: 10  }} className="label"><b>Password</b></InputLabel> */}
        <TextField   label="Password" sx={{ ml: 11 ,mb:1  }} margin="normal" type="password" name="password"  value={password} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center"}}>
                    {errorMessageforPassword}
        </p>
        <FormControlLabel sx={{ ml: 10  ,mb:2  }}
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
         

        < Button  variant="contained" sx={{ ml: 20, mb: 2,mr:20 , background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,
                    }
 }} disabled={submitted || (errorMessageforPassword || errorMessageforEmail )} className="button" onClick={submit}>Submit</Button>
        <Grid container>
              <Grid item xs>
                <Link to="/OTP" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
        {/* <button disabled={errorMessageforConfirmPassword || errorMessageforEmail || errorMessageforLastName || errorMessageforFirstName} className="button" onClick={submit}>Submit</button> */}
    </div>

       
    )




} 

export default Login;