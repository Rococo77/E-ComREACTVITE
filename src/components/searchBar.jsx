import React, { useState, useEffect } from "react";
import ApiPromesseProduct from "../api/apiPromesseProduct";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiPromesseProduct();
            setProducts(result);
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div style={{ position: "relative", boxShadow: "0 0 0 1px red", width: "20%" }}>
            <input type="text" placeholder="Rechercher..." onChange={(e) => setSearchTerm(e.target.value)} />
            {searchTerm && (
                <div style={{ position: "absolute", top: "100%", backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column" }}>
                    {filteredProducts.map((product) => (
                        <div key={product.id}>{product.title}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
