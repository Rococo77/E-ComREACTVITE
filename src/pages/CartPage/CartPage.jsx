// pages/CartPage/CartPage.jsx
import React from 'react';
import Cart from '../../components/cart/Cart/Cart';

const CartPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
