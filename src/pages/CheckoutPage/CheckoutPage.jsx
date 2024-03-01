// pages/CheckoutPage/CheckoutPage.jsx
import React from 'react';
import CheckoutForm from '../../components/checkout/CheckoutForm/CheckoutForm';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
