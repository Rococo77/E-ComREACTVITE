// components/cart/Cart/Cart.jsx
import React from 'react';
import CartContext  from '../../../contexts/CartContext';

import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, totalPrice } = React.useContext(CartContext);

  return (
    <div className="px-4 py-2 bg-white shadow-lg rounded-lg">
  {cart.length === 0 ? (
    <p className="text-gray-600 text-lg">Your cart is empty.</p>
  ) : (
    <>
      {cart.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="flex justify-between items-center border-t pt-4 mt-4">
        <span className="text-xl font-bold text-gray-800">Total:</span>
        <span className="text-xl font-bold text-gray-800">${totalPrice}</span>
      </div>
    </>
  )}
</div>

  );
};

export default Cart;
