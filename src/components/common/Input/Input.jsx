import React from 'react';

const Input = ({ type, value, onChange, className, ...props }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 px-4 py-2 rounded-lg text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
  
};

export default Input;

