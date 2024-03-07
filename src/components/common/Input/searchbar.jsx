import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import api from '../../../api/api';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/products');
      setResults(response.data);
    };
    fetchData();
  }, []);

  const filteredResults = results.filter((result) =>
    result.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-xl mx-auto">
  <input
    type="text"
    placeholder="Rechercher"
    className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  {query !== '' && (
    <ul className="absolute w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-10">
      {filteredResults.map((result) => (
        <li
          key={result.id}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out"
        >
          <Link to={`/product/${result.id}`} className="text-gray-800 hover:text-blue-500">
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  )}
</div>

  );
};

export default SearchBar;