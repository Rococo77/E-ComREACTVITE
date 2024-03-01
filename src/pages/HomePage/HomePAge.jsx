// pages/HomePage/HomePage.jsx
import React, { useEffect, useState } from 'react';
import ProductList from '../../components/product/ProductList/ProductList';
import api from '../../api/api';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await api.get('/products');
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <ProductList products={products} />
    </div>
  );
};

export default HomePage;
