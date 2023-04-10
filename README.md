
# Project

- _Date Created_: 09 April 2023
- _Last Modification Date_: 09 April 2023
- _GitLab URL of GROUP 10_: https://git.cs.dal.ca/kadamati/group10.git
- _Render Url Backend_: https://group10-backend.onrender.com
- _Render Url Frontend_: https://group10-frontend.onrender.com
- _GitHub URL Frontend_: https://github.com/suijaa/CSCI_5709_project_frontend
- _GitHub URL Backend_: https://github.com/suijaa/CSCI_5709_project_backend

- Sample buyer email to test: abstractnishith@gmail.com
- Sample buyer password to test: Haha1234
- Sample seller email to test: admin@tushar.com
- Sample seller password to test: admin123

## Authors

- Nishith Vithaldas Gadhiya nishith.gadhiya@dal.ca
- Rituraj Kadamati rituraj.kadamati@dal.ca
- Shobhit Arora sh931365@dal.ca
- Tushar Arora ts953716@dal.ca
- Yogesh Kumar yg727492@dal.ca


## Getting Started

### Prerequisites

To run the project on your local machine, you will first need to install the following software / libraries / plug-ins

```
Node.js

```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing

Install the node.js from the offical website https://nodejs.org/en/download/

After installing check if the node.js is installed by executing the below command

```
node-v
```

### Run steps using cmd in local to run Frontend

```
    git clone https://git.cs.dal.ca/kadamati/group10.git
```

```
     cd group10/frontend
```

```
    npm install
```

```
    npm start
```

### Run steps using cmd in local to run Backend

```
    git clone https://git.cs.dal.ca/kadamati/group10.git
```

```
     cd group10/backend
```

```
    npm install
```

```
    npm start
```

## Built With


- [React.js](https://reactjs.org/) - React.js framework for frontend
- [Netifly](https://www.netlify.com/) - Used Netifly for deployment
- [React Router ](https://reactrouter.com/en/main) - Used React Router for routing
- [Material-UI](https://mui.com/material-ui/getting-started/overview/) Used for creating UI elements and for styling purposes
- [Node.js](https://nodejs.org/en) - Node.js for backend
- [Express.js](https://expressjs.com/) - Express.js for backend
- [MongoDB](https://www.mongodb.com/) - MongoDB for backend database
- [Mongoose](https://mongoosejs.com/docs/) - Used Mongoose for MongoDB framework
- [Render](https://render.com/) - Used platform to deploy our application

## Sources used by Nishith Gadhiya


### - frontend/src/components/Header.js

_Lines 130 - 142_

```

The code below was created by adapting the code in [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he) as shown below:


```

_reference code:_

```
  <IconButton type="submit" aria-label="search">
    <SearchIcon style={{ fill: "blue" }} />
  </IconButton>
```

_mycode:_

```
    <IconButton
            type="button"
            onClick={{ handleSearch }}
            aria-label="search"
          >
            <SearchOutlined
              style={{
                fill: "#252525",
                height: "2rem",
                width: "2rem",
              }}
            />
    </IconButton>
```

- <!---How---> The code in [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he) was implemented by...
  ` Marianna demostrats how to use icon as a button.`
- <!---Why---> [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he)'s Code was used because...
  ` I wanted a search icon beside search bar as a button.`
- <!---How---> [Marianna](https://dev.to/mar1anna/create-a-search-bar-with-react-and-material-ui-4he)'s Code was modified by...
  ` Changed size, type and color of the icon button as per my theme.`

### - File: frontend/src/components/Header.js

_Lines 154 - 195_

```

The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-menu/) as shown below:

```

_reference code:_

```
    <PopupState variant="popover" popupId="demo-popup-menu">
    {(popupState) => (
        <React.Fragment>
        <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
        </Button>
        <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
        </Menu>
        </React.Fragment>
    )}
    </PopupState>
```

_mycode:_

```
    <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <Box>
                <Button
                  aria-label="Account settings"
                  sx={{
                    background: primaryColor,
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: selectedColor,
                    },
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Account
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem
                    aria-label="Update your password"
                    onClick={popupState.close}
                  >
                    <NavLink
                      to="/updatepassword"
                      style={{ textDecoration: "none" }}
                    >
                      Update Password
                    </NavLink>
                  </MenuItem>
                  <MenuItem
                    aria-label="Update your account details"
                    onClick={popupState.close}
                  >
                    <NavLink to="/account" style={{ textDecoration: "none" }}>
                      Update Details
                    </NavLink>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </PopupState>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-menu/) was implemented by...
  ` MaterialUI official document shows how to use dropdown button in an esthetic way`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-menu/)'s Code was used because...
  ` I wanted a dropdown button which will reveal more option when clicked for account settings`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-menu/)'s Code was modified by...
  ` Modified styling, options and size as per my theme and sitemap`

### - File: frontend/src/components/homePage/Product.js

_Lines 138 - 146_

```

The code below  was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-rating/) as shown below:

```

_reference code:_

```
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>

```

_mycode:_

```
          <Stack sx={{ paddingRight: "0.2rem" }} spacing={1}>
            <Rating
              name="half-rating-read"
              value={averageRating}
              precision={0.5}
              readOnly
              size="small"
            />
          </Stack>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-rating/) was implemented by...
  ` MaterialUI official document shows how to use star icons to create 5 start rating components`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-rating/)'s Code was used because...
  ` I wanted a 5 star rating with few lines of code`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-rating/)'s Code was modified by...
  ` Modified value dynamically, size, styling`

### - File: frontend/src/components/homePage/ProductsList.js

_Lines 16 - 24_

```

The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:

```

_reference code:_

```
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>

```

_mycode:_

```
      <Grid container spacing={3}>
        {productsList.map((productData) => {
          return (
            <Grid key={productData._id} item xs={3}>
              <Product key={productData._id} productData={productData} />
            </Grid>
          );
        })}
      </Grid>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) was implemented by...
  ` MaterialUI official document shows how to grid`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was used because...
  ` I wanted a grid where I can show the product list in proper format`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was modified by...
  ` Grid will generate from data as per needed, used with props and map`

### - File: frontend/src/components/homePage/ProductsPage.js

_Lines 88 - 106_

```

The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:

```

_reference code:_

```
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>

```

_mycode:_

```
      <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <Filters
              setProductsList={setProductsList}
              sortCategory={sortCategory}
              getProductsWithWishlisted={getProductsWithWishlisted}
              setTotalPages={setTotalPages}
            />
          </Grid>
          <Grid item xs={6} md={9}>
            <ProductsList productsList={productsList} />
            <Pagination
              sx={{ padding: "2rem" }}
              count={utilState.totalPages}
              page={utilState.page ? utilState.page : 1}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Grid>
        </Grid>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) was implemented by...
  ` MaterialUI official document shows how to grid`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was used because...
  ` I wanted a grid where I can show columns side by side`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was modified by...
  ` Grid will render two components in different column`

### - File: frontend/src/components/homePage/Category.js

_Lines 77 - 94_

```

The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-tabs/) as shown below:

```

_reference code:_

```
  <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>

```

_mycode:_

```
         <StyledTabs
            value={utilState.value ? utilState.value : 0}
            onChange={handleChange}
            scrollButtons
            aria-label="Category Items"
            variant="scrollable"
          >
            {categories.map((category) => {
              return (
                <StyledTab
                  key={category.id}
                  icon={<category.icon />}
                  label={category.title}
                />
              );
            })}
          </StyledTabs>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-tabs/) was implemented by...
  ` MaterialUI official document shows how to use scrollable tabs`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-tabs/)'s Code was used because...
  ` I needed to display my category items when it is overflowing it should give button to scroll`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-tabs/)'s Code was modified by...
  ` used styled component, added icon and label, with data it will create new tabs as needed`

## Sources used by Rituraj Kadamati


### frontend/src/components/product/RatingsModel.js

_Lines ##45 - 63 ##_

```
<Modal open={show} onClose={handleClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add Review
          </Typography>
          <Box component="form" sx={{marginLeft:0}} noValidate>
            <TextField fullWidth margin="normal" label="Enter rating (1-5)" type="number" autoFocus id="rating-input" />
            <TextField fullWidth margin="normal" label="Enter description" multiline rows={3} id="description-input" />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Button variant="contained" color="error" onClick={handleClose} sx={{ mr: 1 }} className="button">
              Close
            </Button>
            <Button variant="contained" onClick={handleSaveChanges} className="button-black">
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>
```

The code above was created by adapting the code in [Material UI](https://mui.com/material-ui/react-modal) as shown below:

```
<Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>

```

- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-modal) was implemented by ...
  ` MaterialUI official document shows how to use model component`
- <!---Why--->[Material UI](https://mui.com/material-ui/react-modal)
- Code was used because I needed a Modal to add ratings and review
- <!---How--->[Material UI](https://mui.com/material-ui/react-modal) Code was modified by implementing custom logic and styles for adding reviews and rating of product

### frontend/src/components/product/ProductInfo.js

_Lines ##10 - 43 ##_

```
<Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <img
          className="responsive-product-image"
          src={product?.imageThumbnailUrl}
          alt={product?.productId}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <div className="margin">
          <p className="heading-1">{product?.name}</p>

          <Grid container spacing={3}>
            <Grid item xs={6} md={4}>
              <div className="icon-div">
                <Rating
                  name="rating"
                  value={Math.round(product?.averageRating)}
                  precision={0.5}
                  readOnly
                />
              </div>
            </Grid>
            <Grid item xs={6} md={8}>
              <div className="icon-div">
                <AttachMoney
                  className="icon-styles"
                  color="green"
                  sx={{ marginLeft: "30px" }}
                />
                <p sx={{ marginTop: "5px" }}>{product?.price}</p>
              </div>
            </Grid>
          </Grid>
```

The code above was created by adapting the code in [Material UI](https://mui.com/material-ui/react-grid/) as shown below:

```
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>

```

- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-grid/)  was implemented by ...
  ` MaterialUI official document shows how to use grid component`
- <!---Why--->[Material UI](https://mui.com/material-ui/react-grid/)
- Code was used because I needed needed to use grid layout for responsive design
- <!---How--->[Material UI](https://mui.com/material-ui/react-grid/)  Code was modified by implementing custom grid length for responsive design and adding components of the product in the grid.

### frontend/src/components/product/Rating.js

_Lines ##211 - 238 ##_

```
 <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1" component="div">
                5 Stars
              </Typography>
              <LinearProgress
                variant="determinate"
                value={ratingsCount[5]}
                color="success"
                sx={{ mb: 1 }}
              />
              <Typography variant="subtitle1" component="div">
                4 Stars
              </Typography>
              <LinearProgress
                variant="determinate"
                value={ratingsCount[4]}
                color="success"
                sx={{ mb: 1 }}
              />
              <Typography variant="subtitle1" component="div">
                3 Stars
              </Typography>
              <LinearProgress
                variant="determinate"
                value={ratingsCount[3]}
                color="success"
                sx={{ mb: 1 }}
              />
```

The code above was created by adapting the code in [Material UI](https://mui.com/material-ui/react-progress/) as shown below:

```
 import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LinearIndeterminate() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
  );
}

```

- <!---How---> The code in [Material UI](https://mui.com/material-ui/react-progress/)  was implemented by ...
  ` MaterialUI official document shows how to use grid component`
- <!---Why--->[Material UI](https://mui.com/material-ui/react-progress/)
- Code was used because I needed needed to use progress bars for rating
- <!---How--->[Material UI](https://mui.com/material-ui/react-progress/)   Code was modified by adding custom properties to make it suitable for the feature

Similary other material UI components were modified in a similar way


## Sources used by Shobhit Arora


### 1: group10/frontend/src/components/paymentGateway/PaymentPage.js

*Lines 62 - 66*

```

The code above was created by adapting the code in [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx) as shown below: 


```
*reference code:*
  ```  
   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
     console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
``` 
    
*mycode:*
``` 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: card,
      onSubmit: (values, action) => {
        // values.preventDefault();
        console.log("On submit "+values);
        const token = localStorage.getItem("Token");

        const headers = {
          Authorization: token,
        };
        let data={}
        
           data = {
            name: values.name,
            card: values.card,
            expiry: values.expiry,
            cvv: values.cvv,
            source: values.radiobuttons,
          };
       

        axios
          .post(
            process.env.REACT_APP_BACKEND_SERVER + "/payment/transaction",
            data,
            {
              headers: headers,
            }
          )
          .then((response) => {
            const output = response.data;

            if (output.responseStatus) {
              navigate("/checkout/success");
            }
          })
          .catch((response) => {
            console.log("Response" + response);
            setPaymentError(response.responseMessage);
          });
      },
    });
``` 
- <!---How---> The code in [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx) was implemented by...
    ``` Thapa demonstrated how to use Formik to handle form.``` 
- <!---Why---> [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx)'s Code was used because...
``` I wanted a to use Formik library for form handeling.``` 
  
- <!---How---> [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx)'s Code was modified by...
``` I took the Formik function and used its inbuilt function in my HTML tags.``` 


### 2: group10/frontend/src/components/paymentGateway/Address.js

*Lines 28-29

```

The code above was created by adapting the code in [Dan](https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function) as shown below: 


```
*reference code:*
  ```  
   /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i
``` 
    
*mycode:*
``` 
  const POSTAL_CODE_REGEX =
    /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
``` 
- <!---How---> The code in [Dan](https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function) was implemented by...
    ``` Dan demonstrated how to use regex for postal code in Canada``` 
- <!---Why---> [Dan](https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function)'s Code was used because...
``` I wanted a to use regex to validate postal code in Canada.``` 
  
- <!---How---> [Dan](https://stackoverflow.com/questions/15774555/efficient-regex-for-canadian-postal-code-function)'s Code was modified by...
``` I took the regex and used in my form vaidation.``` 

### 3: group10/frontend/src/components/wallet/Transaction.js

*Lines 46-95

```

The code above was created by adapting the code in [material ui](https://mui.com/material-ui/react-table/#data-table) as shown below: 


```
*reference code:*
  ```  
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
``` 
    
*mycode:*
``` 
   <div>
      <Header />
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ py: 10, fontWeight: "bold" }}
      >
        My Transactions
      </Typography>
      <TableContainer sx={{ width: "60%", m: "auto" }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Date</TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Amount
              </TableCell>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Source
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionData.map((transaction) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {transaction.date}
                </TableCell>
                <TableCell align="right">{transaction.type}</TableCell>
                <TableCell align="right">{transaction.amount}</TableCell>
                <TableCell align="right">{transaction.source}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        sx={{ marginLeft: "45%", mt: 3 }}
        onClick={() => navigate("/wallet")}
      >
        Go Back
      </Button>
      {/* ))}</p> */}
    </div>
``` 
- <!---How---> The code in [material ui](https://mui.com/material-ui/react-table/#data-table) was implemented by...
    ``` Material ui offical documment to show table component``` 

- <!---Why---> [material ui](https://mui.com/material-ui/react-table/#data-table)'s Code was used because...
``` I wanted a to use table to display transaction in wallet.``` 
  
- <!---How---> [material ui](https://mui.com/material-ui/react-table/#data-table)'s Code was modified by...
``` I modified the table by customizing it accoring to my need and adding styling.``` 


## Sources used by Tushar Arora


### 1: group10/backend/src/utils/authenticateUser.js

_Lines 7 - 17_

```

The code below was created by CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git)

```

_reference code:_

```
  if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

```

_mycode:_

```
  const response = verifyAuthenticationToken(token);
  try {
    if (!response.responseStatus) {
      res.status(401).send({ error: response.responseMessage });

    } else {
      req.user = response.responseData;
      next();
    }
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }


```

- <!---How---> The code in  CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git) was created by CodeWithHarry...

`to add a middle layer authentication for securing the protected rest end points `

- <!---Why---> [(https://github.com/CodeWithHarry/iNotebook-React.git) Code was used because...
  ` I wanted to secure the rest end points so that only the authorized users can access the protected rest end points`
- <!---How--->  [(https://github.com/CodeWithHarry/iNotebook-React.gitl) code was changed by ...
  `adding the additional method and seperating the verfication code in other js file`

### 2: Group10/backend/src/utils/passwordEncryptDecrypt.js

_Lines 4 -6_

```

The code below was created by CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git)

```

_reference code:_

```
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password, salt);

```

_mycode:_

```
encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const bcryptPassword = await bcrypt.hash(password, salt);
  return bcryptPassword;
};

```

- <!---How---> The code in CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git)  was created by CodeWithHarry ...
  ` to store the encrypted password in mongo db`
- <!---Why---> The code in CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git) was used because...
  `I wanted to encrypt the password to protect the user details for unauthorized access `
- <!---How---> The code in CodeWithHarry (https://github.com/CodeWithHarry/iNotebook-React.git) was modified by...
  ` by creating the new function that handles the encruption of password and also decouple the logic from main code`

### 3: Group10/backend/src/features/userManagement/usercontroller.js

_Lines 105 - 125_

```

The code below was created by snyk advisor (https://snyk.io/advisor/npm-package/nodemailer/functions/nodemailer.createTransport)

```

_reference code:_

```

//Send the info along to gmail to transmit the email using NodeMailer.
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmail_username,
        pass: gmail_password
    }
}, {
    // default values for sendMail method
    from: gmail_from,
    //headers: {
    //    'My-Awesome-Header': '123'
    //}
});
transporter.sendMail({
    to: email,
    subject: subject,
    text: message
```

_mycode:_

```
const transport = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.USEREMAIL,
        pass: process.env.USERPASSWORD,
      },
    });
    // console.log(process.env.USEREMAIL)
    // console.log(process.env.USERPASSWORD)

    const maildetails = {
      from: process.env.USEREMAIL,
      to: req.email,
      subject: "Forget Password",
      text: "Your one time password to recover your account is " + otp,
    };
    console.log(maildetails);
    transport.sendMail(maildetails, function (err, info) {
      if (err) {
        console.log(err);
      }
      console.log(info.response);
    });

```

- <!---How---> The code in  snyk advisor (https://snyk.io/advisor/npm-package/nodemailer/functions/nodemailer.createTransport) was created by snyk advisor ...

`to send the automated mail to gmail `

- <!---Why---> The code in  snyk advisor (https://snyk.io/advisor/npm-package/nodemailer/functions/nodemailer.createTransport)  was used because...
  `I wanted to create send the otp to recover the password in case user  forgets its password`
- <!---How--->  The code in  snyk advisor (https://snyk.io/advisor/npm-package/nodemailer/functions/nodemailer.createTransport) was modified by
  `By taking the email details from environment variables and by creating the separate object for sending mail`

### 4 Group10/backend/src/utils/authentication.js

```
The code below was refernced from node json token documentation (https://www.npmjs.com/package/jsonwebtoken)

```

_mycode:_

```
exports.getAuthenticationToken = (user) => {
  const authtoken = jwt.sign(user, process.env.JWT_SECRET);
  return authtoken;
};

data = jwt.verify(token, process.env.JWT_SECRET);

```

- <!---How---> The code in  node json token documentation (https://www.npmjs.com/package/jsonwebtoken) was created...

`to create the token and verify the token `

- <!---Why---> The code in  node json token documentation (https://www.npmjs.com/package/jsonwebtoken) was  used because...
  ` I wanted to authenticate the genuine users`
- <!---How---> The code in  node json token documentation (https://www.npmjs.com/package/jsonwebtoken)  was modified by
  `By creating the seperate methods for  signing the token and verfiying the token`

### 5 frontend/src/components/Login.js

```

the code  below was created by Gurleen Kaur Saluja https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js

```

_reference code:_

```
*Lines 13-22*

    const handleInput = (e) => {
        console.log(e.target.value);
        if(e.target.value) {
            ALPHABET_REGEX.test(e.target.value) ? setErrorMessage(NO_ERROR) : setErrorMessage(ALPHABET_ONLY);
        }
        else {
            setErrorMessage(EMPTY_FIELD);
        }
        setFirstName(e.target.value);
    }
```

_my code:_

```
Line 30-52
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

```

- <!---How---> The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was implemented by  Gurleen Kaur Saluja
  ` for creating the login page and for validating the input fields.`
- <!---Why---> The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was used because
  `I wanted to add valdation and create the login page for our project`
- <!---How--->The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was modified
  `by changing regex and  creating the local variables of label and values and adding custom error message for email`

same thing i have used in

1. frontend/src/components/register.js
2. frontend/src/components/OTP.js
3. frontend/src/components/reset.js
4. frontend/src/components/Account.js

### 6 frontend/src/components/Login.js

```
The code  below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
(https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js)

```

_reference code_

```

<TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

```

_my code_

_Line 121-136_

```

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

```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was implemented
  `by mui material-ui for creating the sign in page.`
- <!---Why---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was used because
  ` I wanted to create the login page for our project and wanted to use material ui components`
- <!---How--->The code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was modified
  ` by changing the effects and creating own custom css and changing the style of the components`

I have also used the Material ui elements (texfield and button) or other components as well and file names are mention below.

1. frontend/src/components/register.js
2. frontend/src/components/OTP.js
3. frontend/src/components/reset.js
4. frontend/src/components/Account.js

### 7 frontend/src/components/Register.js

```
The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:

```

_Reference code_

```
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>xs=8</Item>
      </Grid>
    </Grid>

```

_my code:_

```
*Lines 196-202 *
     <Grid container>
              <Grid item xs>
                <Link to="/login" variant="body2">
                  Already registered?Login
                </Link>
              </Grid>
            </Grid>

```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) was implemented by...
  ` MaterialUI official document shows how to grid`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was used because...
  ` I wanted a grid for already registered user`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-grid/)'s Code was modified by...
  `Inside Grid i have used link to redirect the user to login page`
  same grid i have used in frontend/src/components/Login.js for setting the forget password link and for diverting the user to register page

### 8 frontend/src/components/Account/account.js

```
The code below was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:

```

_Reference code_

```
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

```

_my code_
_Line 207-247_

```
  <Accordion style={{marginLeft:"10%", width:"80%"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>Personal Details</b></Typography>
        </AccordionSummary>
        <AccordionDetails  >
          <Typography>
          <TextField required  label= "First Name" className="textfield" size='small'type="text" name="firstName" value={firstName} onChange={changesInputValuesforpersonal}/><br>
                        </br>

                        <p style={{color:"Red",textAlign:"center"}}>
                            {errorMessageforFirstName}
                        </p>

                        <TextField   required label= "Last Name" className="textfield" size='small'  type="text" name="lastName"  value={lastName} onChange={changesInputValuesforpersonal}/>
                        <p style={{color:"Red",textAlign:"center"}}>
                            {errorMessageforLastName}
                        </p>

```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-accordion/) was implemented by...
  ` MaterialUI official document shows how to show and hide sections of related content on a page.`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-accordion/)'s Code was used because...
  ` I wanted a hide the personal and address details form in account page`
- <!---How---> [MaterialUI](https://mui.com/material-ui/react-accordion/)'s Code was modified by...
  `Inside Grid i have added my personal edit detail and edit account details form inside the accordian`

### 9 frontend/src/components/Account/OrderDetails.js

```
The code below was created by Vishwas gopinav (https://github.com/gopinav) and "https://blog.logrocket.com/react-table-complete-guide/"
```

_Reference code_

```
const columns = useMemo(
    () => [
      {
        // first group - TV Show
        Header: "TV Show",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {

```

_My Code_

_Line 103-136_

```
  const  columns=[
        {
            name: "Product",
            selector : (row)=> < img width={100} height={100}  src={row.photo}/>,
        },
        {
            name:"Order Name",
            selector:(row)=> row.orderName
        },
        {
            name:"Order Number",
            selector: (row)=> row.orderNumber
        },
        {
            name:"Delivery Date",
            selector: (row)=>row.deliveryDate
        },
        {
            name:"Amount",
            selector:(row)=>row.Amount
        },{
            name:"View",
            cell: (row)=><Button  sx={{background: primaryColor,
                textTransform: "none",
                height: "2.5rem",
                "&:hover": {
                  backgroundColor: selectedColor,
                }}} variant="contained" onClick={()=> viewOrderDetails(row)}>View</Button>

        }

    ]


```

- <!---How---> The code was implemented by ("https://blog.logrocket.com/react-table-complete-guide/")
  `The code was used to develop the react table`
- <!---Why---> ("https://blog.logrocket.com/react-table-complete-guide/") Code was used because...
  `I wanted to show the order list of the user`
- <!---How---> ("https://blog.logrocket.com/react-table-complete-guide/")'s Code was modified by...
  `by creating own order object and adding the selector option of view the selected row from the table`

## Sources used by Yogesh Kumar

### 1: group10/frontend/src/components/productManagement

_Lines 80 - 96_

```

The code below was created by MakeUseOf (https://www.makeuseof.com/cloudinary-react-host-image-files/?newsletter_popup=1)

```

_reference code:_

```
const formData = new FormData ();
    formData.append("file", uploadFile);
    formData.append("upload_preset", "your upload preset name");

    Axios.post(
     "https://api.cloudinary.com/v1_1/your Cloudinary cloud name/image/upload",
     formData
   )
    .then((response) => {
      console.log(response);
      setCloudinaryImage(response.data.secure_url);
    })
    .catch((error) => {
      console.log(error);
    });

```

_mycode:_

```
  for (let i = 0; i < imageRawData.length; i++) {
      formData.append("file", imageRawData[i]);
      formData.append("upload_preset", "canadabuys813a");
      formData.append("cloud_name", "dihkowyae");

      fetch(cloudinaryURL, {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data["url"]);
          imageURLS.push(data["url"]);
        })
        .catch((err) => {
          console.log(err);
        });
    }


```

- <!---How---> The code on MakeUseOf website (https://www.makeuseof.com/cloudinary-react-host-image-files/?newsletter_popup=1) was created by MakeUseOf...
  `to upload images upload by the seller`
- <!---Why---> [(https://www.makeuseof.com/cloudinary-react-host-image-files/?newsletter_popup=1) Code was used because...
  ` I wanted to use a service that could help the applicaiton store images online`
- <!---How--->  [(https://www.makeuseof.com/cloudinary-react-host-image-files/?newsletter_popup=1) code was changed by ...

  `I ran it though a loop to support multi-image upload, and store the urls to an array.`

  ### 2: group10/frontend/src/components/productManagement

_Lines 27 - 32_

```

The code below was created by bezkoder.com (https://www.bezkoder.com/multiple-image-upload-react-js/)

```

_reference code:_

```
<input
              type="file"
              multiple
              accept="image/*"
              onChange={selectFiles}
            />
          </label>

  <img src={img.url} alt={img.name} height="80px" />

```

_mycode:_

```
  <input
  onChange={handleImageChange}
  multiple
  type="file" />

  <img src={image ? URL.createObjectURL(image) : null} width={400} />

```

- <!---How---> The code on bezkoder website (https://www.bezkoder.com/multiple-image-upload-react-js/) was created by bezkoder...
  `To select images from the seller`
- <!---Why---> [(https://www.bezkoder.com/multiple-image-upload-react-js/) Code was used because...
  ` I wanted to use a native feature supported by most of the applications.`
- <!---How--->  [(https://www.bezkoder.com/multiple-image-upload-react-js/) code was changed by ...
  `I changed the width and height of images, and also gave it a null object in case an image was not available.`

### 3: group10/frontend/src/components/productManagement

_Lines 20 - 34_

```

The code below was created by GeeksForGeeks (https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/)

```

_reference code:_

```
var user_id = '5eb985d440bd2155e4d788e2';
User.findByIdAndUpdate(user_id, { name: 'Gourav' },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
```

_mycode:_

```
const updateFields = {
      quantity: data.quantity,
      name: data.productName,
      price: data.price,
      sellerId: sellerId,
      description: data.description,
      category: data.category,
    };

    const updateForm = await ProductManagementObj.findByIdAndUpdate(
      productId,
      updateFields,
      { new: true }
    );
```

- <!---How---> The code on GeeksForGeeks (https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/) was created by GeeksForGeeks...
  `To update fields when a seller wants to update an existing product`
- <!---Why---> [(https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/) Code was used because...
  ` For the seller module, the seller could update the fields of items added by them`
- <!---How--->  [(https://www.geeksforgeeks.org/mongoose-findbyidandupdate-function/) code was changed by ...
  `I took reference from the documentation as well to remove the condition, instead pass a JSON object that will be used as a condition.`

### 4: group10/frontend/src/components/sellerDashboard/Dashboard.js

_Lines 14 - 39_

```

The code below was created by Devias (https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/)

```

_reference code:_

```
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Budget
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>

```

_mycode:_

```
<Card sx={{ height: "100%", width: "100%", margin: "10px" }}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {cardName}
            </Typography>
            <Typography variant="h4">{cardNumber}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: "error.main",
              height: 56,
              width: 56,
            }}
          >
            {cardSymbol}
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
```

- <!---How---> The code on Devias's Git repo (https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/) was created by Devias...
  `To have a card on a dashboard`
- <!---Why---> [(https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js//) Code was used because...
  ` For the seller module, the seller could have an overview of the inventory`
- <!---How--->  [(https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/) code was changed by ...
  `I have resued the same card for all four categories, passing in the name, number, and symbol. I have only kept the parameters are required, and also made it to fit in my Box.`

### 5: group10/frontend/src/components/sellerDashboard/SellerCardsOverview

_Lines 37 - 74_

```

The code below was created by Devias-io (https://github.com/devias-io/material-kit-react/blob/main/src/pages/index.js/)

```

_reference code:_

```
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <OverviewBudget
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="$24k"
            />
          </Grid>
      </Container>
    </Box>

```

_mycode:_

```
<Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Grid xs={12} sm={6} lg={3} sx={{ display: "flex" }}>
          <DashboardCard
            cardName="Total products"
            cardNumber={totalProducts}
            cardSymbol="#"
          />
          <DashboardCard
            cardName="Average Rating"
            cardNumber={Number(averageRating).toFixed(2)}
            cardSymbol="★"
          />
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid xs={12} sm={6} lg={3} sx={{ display: "flex" }}>
          <DashboardCard
            cardName="Products running low (<=3)"
            cardNumber={productsRunningLow}
            cardSymbol="⚠"
          />
          <DashboardCard
            cardName="Total amount of orders"
            cardNumber={`$ ${sellerTotalAmount}`}
            cardSymbol="$"
          />
        </Grid>
      </Container>
    </Box>
```

- <!---How---> The code on Devias's Git repo (https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/) was created by Devias...
  `To use all different cards and show it on a single page`
- <!---Why---> [(https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/) Code was used because...
  ` For the seller module, the seller could view different things, and have an overview of the items`
- <!---How--->  [(https://github.com/devias-io/material-kit-react/blob/main/src/sections/overview/overview-budget.js/) code was changed by ...
  `I reused the same card component and passed in values from the backend to the cards. I also made it fit to the dashboard of this application. I have also added a new field to have a different icon/ symbol for every card.`

## Acknowledgments

- For connecting our web application to mongo DB we have referred the offical mongoDB webiste (https://www.mongodb.com/docs/drivers/node/current/).
- For backend folder structure we have referred the tube video of TothePointCode (https://www.youtube.com/watch?v=sbt9XbAXb94) video.
- Dalhousie Brightspace Tutorial instructions and Lecture materials for CSCI 4177/5709 course created by Gabriella Mosquera

## References link:

- https://www.npmjs.com/package/jsonwebtoken
- https://nodemailer.com/about/
- https://www.mongodb.com/docs/drivers/node/current/
- https://cloudinary.com/documentation/react_integration#landingpage
- https://www.youtube.com/watch?v=GML8Mw449O4&t=700s
- https://legacy.reactjs.org/docs/getting-started.html
- https://expressjs.com/en/4x/api.html
- https://github.com/devias-io/material-kit-react

