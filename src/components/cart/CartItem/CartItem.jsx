// components/cart/CartItem/CartItem.jsx
import React from 'react';
import CartContext  from '../../../contexts/CartContext';

const CartItem = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = React.useContext(CartContext);

  return (
    <div className="flex justify-between items-center border-b py-4">
  <div className="flex items-center">
    <img src={product.image} alt={product.title} className="w-20 h-20 object-cover mr-4 rounded-lg" />
    <div>
      <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  </div>
  <div className="flex items-center">
    <button onClick={() => decreaseQuantity(product)} className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-full mr-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">-</button>
    <span className="mx-2 text-gray-800">{product.quantity}</span>
    <button onClick={() => increaseQuantity(product)} className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-full mr-2 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">+</button>
    <button onClick={() => removeFromCart(product)} className="text-red-500 hover:text-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400">Remove</button>
  </div>
</div>

  );
};

export default CartItem;
