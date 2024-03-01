// components/product/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import CartContext  from '../../../contexts/CartContext';



const ProductCard = ({ product }) => {
  const { addToCart } = React.useContext(CartContext);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
      </Link>
      <Link to={`/product/${product.id}`}>
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      </Link>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
