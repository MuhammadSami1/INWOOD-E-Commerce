import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import Product from "./Page/Product";
import CheckOut from "./Page/CheckOut";
import Cart from "./Page/Cart";

function App() {
  return (
    <div className="overflow-auto overflow-y-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
