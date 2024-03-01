
import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={`bg-blue-500 text-white px-4 py-2 rounded ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
