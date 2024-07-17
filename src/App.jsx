import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Shop from "./Page/Shop";

import CheckOut from "./Page/CheckOut";
import Cart from "./Page/Cart";
import Footer from "./Components/Footer";
import { useState } from "react";
import Contact from "./Page/Contact";
import Product from "./Page/Product";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }
  return (
    <div className="overflow-auto overflow-y-auto">
      <Navbar openCart={openCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
      {isCartOpen && <Cart closeCart={closeCart} />}
    </div>
  );
}

export default App;
