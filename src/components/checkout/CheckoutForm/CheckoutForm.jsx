// components/checkout/CheckoutForm/CheckoutForm.jsx
import React, { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: submit form data to server
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mb-2" placeholder="Name" />
      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mb-2" placeholder="Email" />
      <Input type="text" name="address" value={formData.address} onChange={handleInputChange} className="mb-2" placeholder="Address" />
      <Button type="submit">Place Order</Button>
    </form>
  );
};

export default CheckoutForm;
