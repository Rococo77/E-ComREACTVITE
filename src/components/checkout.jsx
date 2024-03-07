import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Checkout() {
    const { clickCounts } = useContext(ProductContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = [];
            for (const item of clickCounts) {
                const response = await axios.get(`https://fakestoreapi.com/products/${item.id}`);
                const productWithCount = { ...response.data, count: item.count };
                fetchedProducts.push(productWithCount);
            }
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, [clickCounts]);

    if (products.length === 0) {
        return (
            <div>
                <p>Votre panier est vide !</p>
                <Link to="/">Retour à la page d'accueil</Link>{" "}
            </div>
        );
    }

    return (
        <div>
            <h1>Checkout</h1>
            {products.map((product, index) => (
                <div key={index} className="Article">
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Prix: {product.price}</p>
                    <p>Nombre de produits: {product.count}</p>
                </div>
            ))}
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}

export default Checkout;
