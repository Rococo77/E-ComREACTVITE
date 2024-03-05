import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CartProvider from "./contexts/CartProvider";
import Navbar from "./components/common/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePAge";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

const App = () => {
  return (
    
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
