import "./App.css";
import SellerDashboard from "./pages/SellerDashboard";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <SellerDashboard />
    </div>
  );
}

export default App;
