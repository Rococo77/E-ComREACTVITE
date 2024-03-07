import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./spinner/spinner";

import { useContext } from "react";
import { ProductContext } from "../context/productContext";
function ProductDetail() {
    const { id } = useParams();
    const { clickCounts, handleContextClick } = useContext(ProductContext);

    const productClickCount = clickCounts.filter((clickId) => clickId === id).length;

    const [product, setProduct] = useState(null);
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });
    }, [id]);

    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
    };

    const handleAddToCart = () => {
        // Nouvelle fonction pour gérer le clic sur le bouton "Ajouter au panier"
        handleContextClick({ id, count: clickCount });
    };

    const handleDecrease = () => {
        if (clickCount > 0) {
            setClickCount((prevCount) => prevCount - 1);
        }
    };

    if (!product) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    return (
        <div className="Article" style={{ padding: "30px" }}>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p style={{ margin: "30px" }}>{product.description}</p>
            <div className="RateContainer">
                <div>{product.rating.rate}</div>
                <div>{product.rating.count}</div>
            </div>
            <p>{product.price}</p>
            <div style={{ padding: "50px" }}>
                <div style={{ width: "100%" }}>
                    {clickCount >= 1 && (
                        <button onClick={handleDecrease} style={{ width: "50%" }}>
                            -1
                        </button>
                    )}
                    <button onClick={handleClick} style={{ width: "50%" }}>
                        +1
                    </button>
                </div>
                {clickCount >= 1 && (
                    <button onClick={handleAddToCart} style={{ width: "100%" }}>
                        Ajouter au panier
                    </button>
                )}
                <p>Nombre de produits: {clickCount}</p>
            </div>

            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}

export default ProductDetail;
