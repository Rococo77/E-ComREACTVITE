import axios from "axios";
import { useEffect, useState } from "react";

function ApiProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://fakestoreapi.com/products");
            setProducts(result.data);
        };

        fetchData();
    }, []);

    return [products, setProducts];
}

export default ApiProducts;
