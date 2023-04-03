import "./App.css";
import SellerDashboard from "./pages/SellerDashboard";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import Main from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPage from "./pages/ResetPage";
import Reset from "./components/reset";
import AccountPage from "./pages/AccountPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpdatePasswordPage from "./pages/UpdatePasswordPage";
import OrderDetails from "./components/Account/OrderDetails";
import ListItemForm from "./components/productManagement/ListItemForm";
import UpdateItems from "./components/productManagement/UpdateItems";
import ProductPageDetails from "./pages/ProductDetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import Success from "./components/paymentGateway/Success";
import ErrorPage from "./components/ErrorPage";
import Counter from "./components/Counter";
import RestrictedResetPage from "./pages/RestrictedResetPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/otp" element={<ResetPage />} />

        <Route path="/reset" element={<RestrictedResetPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductPageDetails />} />
        <Route path="/updatepassword" element={<UpdatePasswordPage />} />
        <Route path="/orderdetails" element={<OrderDetails />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/success" element={<Success />} />
        <Route path="/additem" element={<ListItemForm preFilled="false" />} />
        <Route path="/updateitem" element={<UpdateItems />} />
        <Route
          path="/updateitemform"
          element={<ListItemForm preFilled="true" />}
        />

        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
