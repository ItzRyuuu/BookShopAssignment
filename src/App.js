import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Screen/About/About";
import Order from "./Screen/Order/OrderScreen";
import ProductScreen from "./Screen/Product/ProductScreen";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Banner from "./Screen/Homepage/Banner";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/home" element={<Banner />} />
        <Route path="/product" element={<ProductScreen />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
