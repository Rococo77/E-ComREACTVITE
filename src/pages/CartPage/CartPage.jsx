// pages/CartPage/CartPage.jsx
import React from 'react';
import Cart from '../../components/cart/Cart/Cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <Cart />
      <Link to="/checkout">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-full mt-4">Proceed to checkout</button>
      </Link>
    </div>
  );
};

export default CartPage;
