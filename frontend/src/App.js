import "./App.css";
import SellerDashboard from "./pages/SellerDashboard";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Main from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPage from "./pages/ResetPage"
import Reset from "./components/reset";
import AccountPage from "./pages/AccountPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import OrderDetails from "./components/Account/OrderDetails";
import ListItemForm from "./components/productManagement/ListItemForm";
import UpdateItems from "./components/productManagement/UpdateItems"

function App() {

  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<ResetPage />} />
        <Route path="/reset" element={<Reset/>}/>
        {localStorage.getItem("isUserLoggedIn") ? (
          <>
          
           <Route path="/account" element={<AccountPage/>}/>
           <Route path="/home" element={<HomePage/>}/>
           <Route path="/header" element={<Header/>}/>
           <Route path="/sellerdashboard" element={ <SellerDashboard />}/>
           <Route path="/cart" element={<Cart />}/> 
           <Route path="/updatepassword" element={<UpdatePasswordPage/>}/>
           <Route path="/orderdetails" element={<OrderDetails/>}/>
           <Route path="/additem" element={<ListItemForm preFilled="false"/>}/>
           <Route path="/updateitem" element={<UpdateItems/>}/>
           <Route path="/updateitemform" element={<ListItemForm preFilled="true"/>}/>

          </>
        ) : (
          <Route path="/" element={<Main />} />
        )}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
