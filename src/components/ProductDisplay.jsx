import PaginationBar from "./PaginationBar";
import ApiCategory from "../api/apiCategory";
import { Link } from "react-router-dom";
function createProductElements(products, category) {
    let produitCase = [];
    let elementPerPage = 4;

    products.forEach((produit, index) => {
        if (category === "general" || produit.category === category) {
            produitCase.push(
                <Link to={`/product/${produit.id}`} key={produit.id} className="Article">
                    <div className="LeftContainer">
                        <h3 className="title">{produit.title}</h3>
                        <div className="Infos">
                            <div className="price">{produit.price}€</div>
                            <p>•</p>
                            <div>{produit.rating.rate}&#9733;</div>
                            <div>({produit.rating.count})</div>
                        </div>
                        <div className="Descri">{produit.description.length > 150 ? produit.description.substring(0, 150) + "..." : produit.description}</div>
                        <div className="clickReserv"> Cliquez pour acheter</div>
                    </div>
                    <div className="ImgContainer">
                        <img src={produit.image} alt={"Photo produit : "} />
                    </div>
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
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50px" }}>
                <h1 className="categoryName"> Catégorie : {category === "general" ? "général" : category} </h1>
            </div>
            {pages[numPage] && <div className="articleContainer">{pages[numPage]}</div>}
            <PaginationBar numPage={numPage} setnumPage={setNumPage} nbrPage={nbrPage} />
        </section>
    );
}

export default ProductDisplay;
