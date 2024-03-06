import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Spinner from "./spinner/spinner";

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

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

    if (!product) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    return (
        <div className="Article">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p style={{ margin: "30px" }}>{product.description}</p>
            <div className="RateContainer">
                <div>{product.rating.rate}</div>
                <div>{product.rating.count}</div>
            </div>
            <p>{product.price}</p>
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}

export default ProductDetail;
