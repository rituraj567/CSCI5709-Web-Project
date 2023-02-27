import "./App.css";
import SellerDashboard from "./pages/SellerDashboard";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import ProductTable from "./components/productManagement/ProductTable";
import ListItemForm from "./components/productManagement/ListItemForm";
import SellerNavbar from "./components/sellerDashboard/SellerNavbar";
import UpdateItems from "./components/productManagement/UpdateItems";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Cart />
      {/* <SellerDashboard /> */}
      {/* <ProductTable/> */}
      <ListItemForm/>
      {/* <UpdateItems/> */}
    </div>
  );
}

export default App;
