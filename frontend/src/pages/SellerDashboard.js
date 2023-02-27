import React from "react";
import SellerNavbar from "../components/sellerDashboard/SellerNavbar";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import "../components/sellerDashboard/sellerdashboard.css";
import ProductTable from "../components/productManagement/ProductTable";

function SellerDashboard() {
  return (
    <div>
      <SellerNavbar/>
    <div className="dashboard">
    {/* <div id="updateInventory">
      <Button variant="contained" id="buttons">
        <Link to="/additem" id="links">
          Add Item
        </Link>
      </Button>
      <Button variant="contained" id="buttons">
        <Link to="/updateitem" id="links">
          {" "}
          Update Item{" "}
        </Link>
      </Button>
    </div> */}

    <div id="seller-overview">
      <Card variant="outlined" id="dashboard-card">
        <p style={{ textAlign: "center" }}>
          <h2> Product Count </h2>
          <br /> <h3> 35 </h3>
        </p>
      </Card>
      <Card variant="outlined" id="dashboard-card">
        <p style={{ textAlign: "center" }}>
          <h2> Rating </h2>
          <br /> <h3> 4.2 </h3>
        </p>
      </Card>
      <Card variant="outlined" id="dashboard-card">
        <p style={{ textAlign: "center" }}>
          <h2> Items sold </h2>
          <br /> <h3> 35 </h3>
        </p>
      </Card>
      <Card variant="outlined" id="dashboard-card">
        <p style={{ textAlign: "center" }}>
          <h2> Product Count </h2>
          <br /> <h3> 35 </h3>
        </p>
      </Card>
    </div>
    <ProductTable showEditButton="false" />
  </div>
  </div>

  );
}

export default SellerDashboard;
