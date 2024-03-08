import PaginationBar from "./PaginationBar";
import ApiCategory from "../api/apiCategory";
import { Link } from "react-router-dom";
function createProductElements(products, category) {
    let produitCase = [];
    let elementPerPage = category === "general" ? 6 : 4;

    products.forEach((produit, index) => {
        if (category === "general" || produit.category === category) {
            produitCase.push(
                <Link to={`/product/${produit.id}`} key={produit.id} className="Article">
                    <img src={produit.image} alt={"Photo produit : "} />
                    <div className="title">{produit.title}</div>
                    <div className="RateContainer">
                        <div>{produit.rating.rate}</div>
                        <div>{produit.rating.count}</div>
                    </div>
                    <div className="price">{produit.price}</div>
                </Link>
            );
        }
    });

    const pages = [];
    while (produitCase.length > 0) {
        pages.push(produitCase.splice(0, elementPerPage));
    }

    return pages;
}

function ProductDisplay(category, numPage, setNumPage) {
    const [products, setProducts] = ApiCategory();
    const pages = createProductElements(products, category);
    let nbrPage = pages.length;

    return (
        <section className="Container">
            <h1> Catégorie : {category === "general" ? "général" : category} </h1>
            {pages[numPage] && <div className="articleContainer">{pages[numPage]}</div>}
            <PaginationBar numPage={numPage} setnumPage={setNumPage} nbrPage={nbrPage} />
        </section>
    );
}

export default ProductDisplay;
