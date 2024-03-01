// components/common/Input/Input.jsx
import React from 'react';

const Input = ({ type, value, onChange, className, ...props }) => {
  return (
    <input type={type} value={value} onChange={onChange} className={`border border-gray-300 px-2 py-1 rounded ${className}`} {...props} />
  );
};

export default Input;
