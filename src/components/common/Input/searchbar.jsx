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
    <div className="relative w-full max-w-xl m-auto">
      <input
        type="text"
        placeholder="Rechercher"
        className="w-full p-3 pl-10 text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
     
      {query !== '' && (
        <ul className="absolute w-full mt-2 bg-white border rounded-md shadow-lg z-10">
          {filteredResults.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
               <Link to={`/product/${result.id}`} className="text-gray-800">
                <span>{result.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;