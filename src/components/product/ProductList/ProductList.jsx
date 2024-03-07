// components/product/ProductList/ProductList.jsx
import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.length > 0 ? (
    products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  ) : (
    <p className="text-gray-800 text-lg">Aucun produit trouvé.</p>
  )}
</div>

  );
};

export default ProductList;
