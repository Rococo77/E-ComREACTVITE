// pages/CartPage/CartPage.jsx
import React from 'react';
import Cart from '../../components/cart/Cart/Cart';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Cart</h1>
  <Cart />
  <Link to="/checkout">
    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline">
      Proceed to checkout
    </button>
  </Link>
</div>

  );
};

export default CartPage;
