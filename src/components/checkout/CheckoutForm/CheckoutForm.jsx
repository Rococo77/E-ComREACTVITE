// components/checkout/CheckoutForm/CheckoutForm.jsx
import React, { useState } from 'react';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';




const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '' || formData.address === '' || formData.cardNumber === '' || formData.expirationDate === '' || formData.securityCode === '') {
      // Handle empty fields error
      
      alert('All fields are required');
    } else if (!validateEmail(formData.email)) {
      // Handle invalid email error
      console.error('Invalid email address');
    } else {
      // TODO: submit form data to server
      alert("Votre commande a été passée avec succès !");
    }
  };
  
  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <Input type="text" name="name" value={formData.name} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Name" />
      <Input type="email" name="email" value={formData.email} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" />
      <Input type="text" name="address" value={formData.address} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Address" />
      <Input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Card Number" />
      <Input type="text" name="expirationDate" value={formData.expirationDate} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Expiration Date (MM/YY)" />
      <Input type="text" name="securityCode" value={formData.securityCode} onChange={handleInputChange} className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Security Code (CVV)" />
      <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Place Order</Button>
    </form>
  );
};

export default CheckoutForm;
