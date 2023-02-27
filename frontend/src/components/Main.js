
import React from 'react';
import {useNavigate} from "react-router-dom";
import '../Main.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/Button';
import Logo from '../images/LOGO.jpeg';
function Main() {
    const navigate = useNavigate();
    
    const goTologin = () => {
    
      // This will navigate to second component
      navigate('/login'); 
    };
    const goToRegistration = () => {
    
      // This will navigate to first component
      navigate('/register'); 
    };
    
    return (
     
        
        <div id="main" >
        {/* <h3 style={{fontSize:'24px', textAlign:'center'}}>Logo</h3> */}
        <img src={Logo}  width="400" height="400" style={{marginLeft:"5px"}}/>
        <div className='buttons'>
            <div className='home-button'>
            <ButtonGroup variant="text" aria-label="text button group" color="error">
                <Button  onClick={goTologin}>Login</Button>
                <Button onClick={goToRegistration}>Register</Button>
            </ButtonGroup>
            </div>
           
           
         </div>
         
     </div>
    
     
    );
  }
    
  export default Main;