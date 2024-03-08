import axios from "axios";
import { Fragment, useEffect, useState } from "react";
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
        <Fragment>
            <div className="Article" style={{ padding: "30px" }}>
                <div className="ImgContainer">
                    <img src={product.image} alt={"Photo produit : "} />
                </div>
                <div className="LeftContainer">
                    <h3 className="title">{product.title}</h3>
                    <div className="Infos">
                        <div className="price">{product.price}€</div>
                        <p>•</p>
                        <div>{product.rating.rate}&#9733;</div>
                        <div>({product.rating.count})</div>
                    </div>
                    <div className="Descri">{product.description}</div>
                </div>

                <div style={{ padding: "50px", width: "20%" }}>
                    <div style={{ width: "100%" }}>
                        <button onClick={handleClick} style={{ width: "50%" }}>
                            +1
                        </button>
                        {clickCount >= 1 && (
                            <button onClick={handleDecrease} style={{ width: "50%" }}>
                                -1
                            </button>
                        )}
                    </div>
                    {clickCount >= 1 && (
                        <button onClick={handleAddToCart} style={{ width: "100%" }}>
                            Ajouter au panier
                        </button>
                    )}
                    <p style={{ width: "100%", textAlign: "center" }}>Nombre de produits: {clickCount}</p>
                </div>
            </div>

            <Link to="/">Retour à la page d'accueil</Link>
        </Fragment>
    );
}

export default ProductDetail;
