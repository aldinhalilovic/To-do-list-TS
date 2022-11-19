import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cart from "./pages/cart";
import Products from "./pages/products";
import Shop from "./pages/shop/Index";
import Welcome from "./pages/welcome/Index";

function App() {
  const size = {
    minHeight: "80vh",
  };
  return (
    <div>
      <Navbar />
      <div style={size}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
