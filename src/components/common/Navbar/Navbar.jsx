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
    <nav className="bg-gray-800 text-white px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold">
            <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
            My Store
          </Link>
        </div>
        <div className="flex items-center">
          <SearchBar/>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-6 w-6" />
            <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-full text-xs">{cartItemsCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



