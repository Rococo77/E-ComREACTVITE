// pages/ProductPage/ProductPage.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';
import Button from '../../components/common/Button/Button';
import CartContext from './../../contexts/CartContext';

const ProductPage = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">{product.title}</h1>
  <img src={product.image} alt={product.title} className="w-full h-64 object-cover mb-4 rounded-lg shadow-lg" />
  <p className="text-gray-600 mb-6">{product.description}</p>
  <div className="flex justify-between items-center">
    <span className="text-xl font-bold text-gray-800">${product.price}</span>
    <Button onClick={() => addToCart(product)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300 ease-in-out">Add to Cart</Button>
  </div>
</div>

  );
};

export default ProductPage;
