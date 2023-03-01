
# Project Proposal

- _Date Created_: 20 February 2023
- _Last Modification Date_: 28 February 2023
- _Deployed application URL on Netifly_: https://csci-5709-group10-proposal.netlify.app/
- _GitLab URL of GROUP 10_: https://git.cs.dal.ca/kadamati/group10.git
- _GitLab Branch Url_: https://git.cs.dal.ca/kadamati/group10/-/tree/develop

# Group 10

## Authors

- Tushar Arora ts953716@dal.ca
- Shobhit Arora sh931365@dal.ca
- Yogesh Kumar yg727492@dal.ca
- Nishith Vithaldas Gadhiya nishith.gadhiya@dal.ca
- Rituraj Kadamati rituraj.kadamati@dal.ca

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

### Run steps using cmd in local

```
    git clone https://git.cs.dal.ca/kadamati/group10.git -b develop
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

After executing the above commands the compiled successfully message is displayed and the application can be viewed on local at http://localhost:3000

## Deployment

To deploy this on Netifly, I have followed the steps mentioned in [T2 Netlify Guide](https://dal.brightspace.com)

## Built With


- [React.js](https://reactjs.org/) - React.js framework for frontend
- [Netifly](https://www.netlify.com/) - Used Netifly for deployment
- [React-Bootstrap](https://react-bootstrap.github.io/) - Used React-Bootstrap for styling the application using built in components
- [React Router ](https://reactrouter.com/en/main) - Used React Router for routing
- [Material-UI](https://mui.com/material-ui/getting-started/overview/) Used for creating UI elements and for styling purposes

## Sources Used


Used Material UI components

1. Radio
2. TextField
3. Button/Button Group
4. Text Label
5. Menu
6. Box
7. Checkbox
8. Icons
9. Table
10. Dailog
11. Grid

Used following React Bootstrap components:

1. Button
2. Container
3. Card
4. Row
5. Col
6. Navbar
7. Nav
8. StarFill
9. CurrencyDollar

Used the following dependencies from React

1. react-bootstrap
2. react-bootstrap-icons
3. react-data-table-component
4. react-dom
5. react-hook-form
6. react-lazy-load-image-component
7. react-router
8. react-router-dom
9. react-scripts
10. react-table

Used images and product data from [FakeStoreAPI](https://fakestoreapi.com)
Used images from

1. https://m.media-amazon.com/images/I/61ICqyoI2NL._AC_SX425_.jpg
2. https://videotron.com/sites/default/files/styles/original_large/public/mobility_product/iPhone%2014%20Pro%20Space%20Black_0.webp?itok=fLIWY65B

Used following React Bootstrap components and explanation on why those components are used:

1. Button - Used button for displaying button in the page
2. Container - used container for centering the content
3. Card - used card component for displaying the components like text and button in a card
4. Row - Use Bootstrap rows for grid layout
5. Col Use Bootstrap col for grid layout
6. Navbar - Use Navbar for the navigation header
7. Nav -Used Nav as the Nav Link in the Navbar
8. StarFill -used icon from React Bootstrap Icons library
9. CurrencyDollar - used icon from React Bootstrap Icons library

Used the following components from React Router library for navigation across pages

1. useNavigate - Used for navigating web pages

2. useLocation - Used useLocation for getting the params data passed from one page to another page

3. Link - Used Link component for smooth navigation of pages without resulting in reloading the page

Used images and product data from [FakeStoreAPI](https://fakestoreapi.com)

### - frontend/src/components/Header.js

_Lines 139 - 151_

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

_Lines 163 - 204_

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
                  sx={{
                    background: "#8c7353",
                    textTransform: "none",
                    height: "2.5rem",
                    "&:hover": {
                      backgroundColor: "#5e3e15",
                    },
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  Account
                </Button>
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>
                    Update Password
                  </MenuItem>
                  <MenuItem onClick={popupState.close}>Update Details</MenuItem>
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

_Lines 87 - 95_

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
              value={rating.rate}
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

_Lines 205 - 214_

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
            <Grid item xs={3}>
              <Product key={productData.id} productData={productData} />
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

_Lines 17 - 24_

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
            <Filters />
          </Grid>
          <Grid item xs={6} md={9}>
            <ProductsList />
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

_Lines 30 - 66_
_Lines 145 - 161_

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
            value={value}
            onChange={handleChange}
            scrollButtons
            aria-label="Category Items"
            variant="scrollable"
          >
            {categories.map((category, index) => {
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

### -File: frontend/src/components/Login.js

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

- <!---How---> The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was implemented by  Gurleen Kaur Saluja for creating the login page and for validating the input fields.
- <!---Why---> The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was used because I wanted to add valdation and create the login page for our project
- <!---How--->The code in (https://git.cs.dal.ca/gsaluja/tutorial3demo/-/blob/t3v2/src/Components/LoginUser.js) was modified by changing regex and  creating the local variables of label and values and adding custom error message for email

same thing i have used in

1. frontend/src/components/register.js
2. frontend/src/components/OTP.js
3. frontend/src/components/reset.js
4. frontend/src/components/Account.js

### -File: frontend/src/components/Login.js

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

*Line 121-136*
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
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was implemented by mui
  material-ui for creating the sign in page.
- <!---Why---> The code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was used because I wanted to create the login page for our project and wanted to use material ui components
- <!---How--->The code in [MaterialUI](https://mui.com/material-ui/react-grid/) as shown below:
  (https://github.com/mui/material-ui/blob/v5.11.10/docs/data/material/getting-started/templates/sign-in/SignIn.js) was modified by changing the effects and creating own custom css and changing the style of the components

I have also used the Material ui elements (texfield and button) or other components as well and file names are mention below.

1. frontend/src/components/register.js
2. frontend/src/components/OTP.js
3. frontend/src/components/reset.js
4. frontend/src/components/Account.js

### -File: frontend/src/components/Register.js

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
  `` Inside Grid i have used link to redirect the user to login page`
  same grid i have used in frontend/src/components/Login.js for setting the forget password link and for diverting the user to register page

### - File :frontend/src/components/Account/account.js

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
*Line 207-247*
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
  ``` Inside Grid i have added my personal edit detail and edit account details form inside the accordian`

### - File:frontend/src/components/Account/OrderDetails.js

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


*Line 103-136*
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
  ` The code was used to develop the react table`
- <!---Why---> ("https://blog.logrocket.com/react-table-complete-guide/") Code was used because...
  `` I wanted to show the order list of the user`
- <!---How---> ("https://blog.logrocket.com/react-table-complete-guide/")'s Code was modified by...
  ```by creating own order object and adding the selector option of view the selected row from the table`

### - File: frontend/src/components/product/CardComponent.js

_Lines 9 - 39_

```

The code above was created by adapting the code in [React Bootstrap](https://react-bootstrap.github.io/components/cards/) as shown below:

```

_reference code:_

```
    import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
```

_mycode:_

```
        <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Total: ${props.totalCost} </Card.Title>

          <Card.Text>{props.totalItems} items added to cart</Card.Text>
          <div className="mt-4 center-buttons">
            <Link to="/checkout">
              <Button variant="dark" size="lg" className="mb-3">
                Proceed To Checkout
              </Button>
            </Link>

            <Button
              variant="warning"
              size="lg"
              onClick={() =>
                navigate("/cart", {
                  replace: false,
                  state: {
                    cartItems: props.cartItems,
                    totalCost: props.totalCost,
                    totalItems: props.totalItems,
                  },
                })
              }
            >
              Go to Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
```

- <!---How---> The code in [React Bootstrap](https://react-bootstrap.github.io/components/cards/) was implemented by...

  ` React Bootstrap official document shows how to implement it`

- <!---Why---> [React Bootstrap](https://react-bootstrap.github.io/components/cards/)'s Code was used because...

  ` I wanted to display the card component where the buttons related to cart are displayed in a card`

- <!---How---> [React Bootstrap](https://react-bootstrap.github.io/components/cards/)'s Code was modified by...
  ` By adding custom css styles and buttons and adding the navigation logic to navigate programmatically.`

Similarly for all other Bootstrap components mentioned above the changes are made in a similar way.

### - File: frontend/src/components/paymentGateway/Payment.js

_Lines 18 - 28_

```

The code above was created by adapting the code in [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx) as shown below:


```

_reference code:_

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

_mycode:_

```
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: card,
      onSubmit: (values, action) => {
        action.resetForm();
      },
    });
  console.log(
    "errors",errors
  );
```

- <!---How---> The code in [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx) was implemented by...
  ` Thapa demonstrated how to use Formik to handle form.`
- <!---Why---> [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx)'s Code was used because...
  ` I wanted a to use Formik library for form handeling.`
- <!---How---> [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx)'s Code was modified by...
  ` I took the Formik function and used its inbuilt function in my HTML tags.`

### - File: frontend/src/pages/SellerDashboard.js

_Lines 28 - 33_

```

The code above was created by adapting the code in [MaterialUI](https://mui.com/material-ui/react-card/) as shown below:


```

_reference code:_

```
 <Card variant="outlined">
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
 </Card>
```

_mycode:_

```
  <Card variant="outlined" sx={{width: "20%";
    height: "20%";
    background-color: "#EF233C"}}>
        <p style={{ textAlign: "center" }}>
          <h2> Product Count </h2>
          <br /> <h3> 35 </h3>
        </p>
  </Card>
```

- <!---How---> The code in [MaterialUI](https://mui.com/material-ui/react-card/)'s was implemented by...
  `MaterialUI official documentation to show how to use card component.`
- <!---Why---> [MaterialUI](https://mui.com/material-ui/react-card/)'s Code was used because...
  ` To add card component to seller's dashboard to have an overview of items`
- <!---How---> [thapatechnical](https://github.com/thapatechnical/reactValidation/blob/main/src/Registration.jsx)'s Code was modified by...
  ` I changed the color, and dimension of the component to match our platform's color.`

## Acknowledgments

- Dalhousie Brightspace Tutorial instructions and Lecture materials for CSCI 4177/5709 course created by Gabriella Mosquera
