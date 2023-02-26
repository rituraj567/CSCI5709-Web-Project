import "./App.css";
import SellerDashboard from "./pages/SellerDashboard";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SellerDashboard />
      <Cart />
    </div>
  );
}

export default App;
