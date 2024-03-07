
import React from 'react';

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button onClick={onClick} className={` text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
