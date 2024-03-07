// components/product/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import CartContext  from '../../../contexts/CartContext';



const ProductCard = ({ product }) => {
  const { addToCart } = React.useContext(CartContext);

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
  <Link to={`/product/${product.id}`}>
    <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
  </Link>
  <Link to={`/product/${product.id}`}>
    <h2 className="text-2xl font-bold mb-2 hover:text-blue-500">{product.title}</h2>
  </Link>
  <p className="text-gray-600 mb-4">{product.description}</p>
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold">${product.price}</span>
    <Button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">Add to Cart</Button>
  </div>
</div>

  );
};

export default ProductCard;
