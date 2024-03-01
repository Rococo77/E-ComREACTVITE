// components/cart/Cart/Cart.jsx
import React from 'react';
import CartContext  from '../../../contexts/CartContext';

import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, totalPrice } = React.useContext(CartContext);

  return (
    <div className="px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <div className="flex justify-between items-center border-t py-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">${totalPrice}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
