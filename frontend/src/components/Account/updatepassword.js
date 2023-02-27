import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import '../../Main.css';

function UpdatePassword(){

    const[currentpassword,setCurrentpassword]=useState('')
    const[newpassword, setNewPassword] = useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const[errorMessageforNewPassword,setErrorMessageforNewPassword]=useState('');
    const[errorMessageforConfirmPassword,setErrorMessageforConfirmPassword]=useState('');
    const[errorMessageforCurrentPassword,setErrorMessageforCurrentPassword]=useState('');
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

        if(label=== "currentpassword"){
            if(value){
                setErrorMessageforCurrentPassword(NO_ERROR);
            }
            else{
                setErrorMessageforCurrentPassword(EMPTY_FIELD);
            }
            setCurrentpassword(value);

        }


        if(label === "newpassword"){

            if(value){
                PASSWORD_REGEX.test(value) ? setErrorMessageforNewPassword(NO_ERROR) : setErrorMessageforNewPassword(PASSWORD_ERROR);
               
            }
       
            else{

                setErrorMessageforNewPassword(EMPTY_FIELD);

            }


            setNewPassword(value);
        }

        if(label === "confirmpassword"){
            if(value)
            {
                if(value===newpassword)
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

        if(newpassword === ''|| confirmPassword===''|| currentpassword==='')
        {
            setSubmitted(true);
        }
        else{
            setSubmitted(false);
        }

        if(newpassword && currentpassword)
        {
            if(newpassword === currentpassword){
            setErrorMessageforNewPassword("New password and current password cannot be same");
            }
        }
     
     

      
    }
 
    const submit=(e)=>{
        e.preventDefault();
        
        alert("Password is succesfully changed!")
        navigate("/login")
    
    }

    return(
        <div>
            <Header/>
        <div  id="login">
        
        <h2 style={{textAlign:"center"}}>Update Password </h2>
 
        {/* <InputLabel required sx={{ ml: 10  }} className="label"><b>Email</b></InputLabel> */}
        <TextField    label="Current Password" sx={{ ml: 11 ,mb:1 }} margin="normal" type="password" name="currentpassword"  value={currentpassword} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforCurrentPassword}
        </p>
        <TextField    label="New Password" sx={{ ml: 11 ,mb:1 }} margin="normal" type="password" name="newpassword"  value={newpassword} onChange={changesInputValues}/>
        <p style={{color:"Red",textAlign:"center" }}>
                    {errorMessageforNewPassword}
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
                      }}disabled={submitted || (errorMessageforCurrentPassword || errorMessageforConfirmPassword ||errorMessageforNewPassword)} className="button" onClick={submit}>Submit</Button>
       
    </div>
    </div>

       
    )

}
export default UpdatePassword;