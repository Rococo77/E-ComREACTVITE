// pages/CheckoutPage/CheckoutPage.jsx
import React from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-gray-800 mb-6">Checkout</h1>
  <CheckoutForm />
</div>

  );
};

export default CheckoutPage;
