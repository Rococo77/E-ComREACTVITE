import React, { useState, useEffect, useRef } from "react";
import ApiPromesseProduct from "../api/apiPromesseProduct";
import { Link } from "react-router-dom";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);

    const searchBarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                setSearchTerm("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiPromesseProduct();
            setProducts(result);
        };

        fetchData();
    }, []);

    const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div
            ref={searchBarRef}
            style={{
                position: "relative",
                width: "30%",
                borderRadius: "25px",
                backgroundColor: "#E8E8E8",
                height: "80%",
                border: "3px solid #c4c0c0",
            }}
        >
            <input
                type="text"
                placeholder="Rechercher..."
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%", backgroundColor: "transparent", border: "none", paddingLeft: "30px" }}
            />
            {searchTerm && (
                <div style={{ position: "absolute", top: "100%", backgroundColor: "white", width: "100%", display: "flex", flexDirection: "column" }}>
                    {filteredProducts.map((product) => (
                        <Link
                            to={`product/${product.id}`}
                            key={product.id}
                            style={{ padding: "5px 10px", width: "100%", flexDirection: "column", justifyContent: "flex-start" }}
                        >
                            <p style={{ padding: "0 10px", fontSize: "14px" }}>{product.title}</p>
                            <hr style={{ width: "100%" }} />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
