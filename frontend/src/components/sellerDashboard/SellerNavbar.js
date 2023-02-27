import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import "./sellerdashboard.css";

function SellerNavbar() {
  return (
    <Box sx={{ alignSelf: "stretch" }}>
      <AppBar position="static" sx={{ bgcolor: "#D90429" }}>
        <Toolbar>
          <Button variant="contained" sx={{ marginRight: "10px" }} id="buttons">
            {/* <Link to="/" id="links">
              <HomeIcon />
            </Link> */}
          </Button>
          <b>Seller Dashboard</b>
          <Button variant="contained" sx={{ marginLeft: "auto" }} id="buttons">
            <AccountCircle />
          </Button>
          <Button variant="contained" sx={{ marginLeft: "10px" }} id="buttons">
            <LogoutIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default SellerNavbar;
