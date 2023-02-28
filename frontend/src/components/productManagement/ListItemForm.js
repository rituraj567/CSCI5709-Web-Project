import React, { useEffect } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import "./listItemsForm.css";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import { useState } from "react";
// import { useHistory } from "react-router-dom";
import UploadProductImage from "./UploadProductImage";
import { Link } from "react-router-dom";
import SellerNavbar from "../sellerDashboard/SellerNavbar";
import { useNavigate} from 'react-router-dom';


const ListItemForm = (props) => {
    const handlePreFilled = () => {
      if (props.preFilled == "true") {
        setPreFilled(true);
        setProductName("Sample Product");
        setPrice(1);
        setQuantity(10);
      } else {
        setPreFilled(false);
      }
    };

    const navigate=useNavigate()
  
    useEffect(() => {
      handlePreFilled();
    });
    const [price, setPrice] = useState();
    const [priceError, setPriceError] = useState();
    const [priceErrorMessage, setPriceErrorMessage] = useState("");
  
    const [quantity, setQuantity] = useState();
    const [quantityError, setQuantityError] = useState();
    const [quantityErrorMessage, setQuantityErrorMessage] = useState("");
  
    const [productName, setProductName] = useState("");
    const [productNameError, setProductNameError] = useState();
    const productNameErrorMessage = "Please give product a name";
  
    const [validForm, setValidForm] = useState(false);
  
    const [preFilled, setPreFilled] = useState(false);
    // const history = useHistory();
  
    const fullSubmit = () => {
      console.log("full submit called");
      console.log(price);
      if (isNaN(Number.parseFloat(price))) {
        setPriceError(true);
        setPriceErrorMessage("Enter a numeric value");
        setValidForm(false);
      } else if (Number.parseFloat(price) < 0) {
        setPriceError(true);
        setPriceErrorMessage("Value should be greater than 0.");
        setValidForm(false);
      } else {
        setPriceError(false);
        setValidForm(true);
  
        if (isNaN(quantity)) {
          setQuantityError(true);
          setQuantityErrorMessage("Enter a numeric value for quantity.");
          setValidForm(false);
        } else if (Number.parseInt(quantity) < 0) {
          setQuantityError(true);
          setQuantityErrorMessage("Enter quantity more than 0.");
          setValidForm(false);
        } else {
          setQuantityError(false);
          if (productName.length <= 0) {
            setProductNameError(true);
            setValidForm(false);
          } else {
            setProductNameError(false);
            // <Redirect to="/" />;
            navigate("/sellerdashboard");
            // history.push("/");
            alert("Success");
          }
        }
      }
    };
  
    const handlePriceChange = (event) => {
      setPrice(event.target.value);
      console.log(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      setQuantity(event.target.value);
      console.log("quantity change called");
      console.log(`quantity called -> ${event.target.value}`);
    };
  
    const handleProductName = (event) => {
      setProductName(event.target.value);
    };
  
    return (
      <>
        <SellerNavbar/>
        <Box className="listItemsForm">
          <Container id="addNewItemStyle">
            <form>
              <h1>List Item Form</h1>
              <h3 style={{ color: "grey" }}>
                Let's put your item on our e-store
              </h3>
              <div>
                <TextField
                  placeholder="Enter the name product"
                  label="Product's name"
                  margin="normal"
                  fullWidth
                  required
                  value={productName}
                  error={productNameError}
                  helperText={productNameError ? productNameErrorMessage : ""}
                  onChange={handleProductName}
                />
              </div>
              <div>
                <TextField
                  placeholder="$0.00"
                  label="Price"
                  margin="normal"
                  fullWidth
                  error={priceError}
                  value={price}
                  // inputProps={{ inputMode: "numeric" }}
                  helperText={priceError ? priceErrorMessage : ""}
                  required
                  onChange={handlePriceChange}
                />
              </div>
              <div>
                <TextField
                  placeholder="0"
                  label="Quantity"
                  margin="normal"
                  fullWidth
                  required
                  error={quantityError}
                  helperText={quantityError ? quantityErrorMessage : ""}
                  onChange={handleQuantityChange}
                  value={quantity}
                />
              </div>
  
              <div>
                <TextField
                  select
                  label="Categories"
                  fullWidth
                  helperText="Please select the category of your product"
                  margin="normal"
                  defaultValue={"Electronics"}
                  required
                >
                  <MenuItem key="Electronics" value="Electronics">
                    Electronics
                  </MenuItem>
                  <MenuItem key="Personal care" value="Personal care">
                    Personal care
                  </MenuItem>
                  <MenuItem key="Food" value="Food">
                    Food
                  </MenuItem>
                  <MenuItem key="Other" value="Other">
                    Other
                  </MenuItem>
                </TextField>
              </div>
  
              <div>
                <TextField
                  label="Additional information"
                  multiline
                  rows={5}
                  style={{ width: "100%" }}
                  placeholder="Input any message that you want to be displayed with the product."
                  // fullWidth
                  margin="normal"
                />
              </div>
  
              <div>
                <Button variant="contained" onClick={fullSubmit} id="buttons">
                  Submit
                </Button>
              </div>
            </form>
          </Container>
          <UploadProductImage />
        </Box>
      </>
    );
  };
  
  export default ListItemForm;