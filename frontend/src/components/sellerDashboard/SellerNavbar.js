import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";
import "./sellerdashboard.css";
function SellerNavbar() {

  const navigate=useNavigate();

  const logout=()=>{
    const token=localStorage.getItem("Token");
    if(token){
      localStorage.removeItem("Token");
      navigate("/");
    }
  }
  return (
    <Box sx={{ alignSelf: "stretch" }}>
      <AppBar position="static" sx={{ bgcolor: "#FFFFFF" }}>
        <Toolbar>
          <Button variant="contained" sx={{ marginRight: "10px" }} id="buttons">
            <Link to="/sellerdashboard" id="links">
              <HomeIcon />
            </Link>
          </Button>
          <b>
            <font style={{ color: "black" }}>Seller Dashboard</font>
          </b>
          <Button variant="contained" sx={{ marginLeft: "auto" }} id="buttons">
            <Link to="/sellerdashboard" id="links">
            <AccountCircle />
            </Link>

          </Button>
          <Button variant="contained" sx={{ marginLeft: "10px" }} id="buttons" onClick={logout} >
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SellerNavbar;
