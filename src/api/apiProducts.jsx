import axios from "axios";
import { useEffect, useState } from "react";

function ApiCategory() {
    const [productsCategories, setProductsCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://fakestoreapi.com/products/categories");
            setProductsCategories(["general", ...result.data]);
        };

        fetchData();
    }, []);

    return [productsCategories, setProductsCategories];
}

export default ApiCategory;
