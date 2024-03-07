import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../../../contexts/CartContext';

import logo from '../../../assets/logo-removebg-preview.png';
import SearchBar from '../../../components/common/Input/searchbar';

const Navbar = () => {
  const { cart } = React.useContext(CartContext);
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-2 md:p-4">
  <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center">
      <Link to="/" className="text-white text-lg font-bold mr-4">
        <img src={logo} alt="Logo" className="h-8" />
      </Link>
      <Link to="/cart" className="text-white text-lg font-bold">
        <FaShoppingCart className="inline-block mr-2" />
        <span className="bg-red-600 text-white p-1 rounded-full text-xs">{cartItemsCount}</span>
      </Link>
    </div>
    <div className="flex items-center justify-end">
      <SearchBar className="mr-4" />
      
    </div>
  </div>
</nav>


  );
};

export default Navbar;



