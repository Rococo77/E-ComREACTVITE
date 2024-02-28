import PaginationBar from "./PaginationBar";
import ApiCategory from "../api/apiCategory";

function ProductDisplay(category, numPage, setNumPage) {
    const [products, setProducts] = ApiCategory();

    let produitCase = [];
    let nbrPage = 0;
    let elementPerPage = 0;
    console.log("affiche moi :" + category);
    if (category === "general") {
        elementPerPage = 6;
        products.forEach((produit, index) =>
            produitCase.push(
                <div key={produit.id} className="Article">
                    <img key={`Photo produit : ${produit} de la page: `} src={produit.image} alt={"Photo produit : "} />
                    {
                        <div className="title" key={`titre produit : ${produit} de la page: `}>
                            {produit.title}
                        </div>
                    }
                    <div className="RateContainer">
                        <div key={`avis produit : ${produit} de la page: `}>{produit.rating.rate}</div>
                        <div key={`nombre avis produit : ${produit} de la page: `}>{produit.rating.count}</div>
                    </div>
                    <div className="price" key={`prix produit : ${produit} de la page: `}>
                        {produit.price}
                    </div>
                </div>
            )
        );
    } else {
        elementPerPage = 4;

        products.forEach((produit, index) => {
            if (produit.category === category) {
                produitCase.push(
                    <div key={produit.id} className="Article">
                        <img key={`Photo produit : ${produit} de la page: `} src={produit.image} alt={"Photo produit : "} />
                        {
                            <div className="title" key={`titre produit : ${produit} de la page: `}>
                                {produit.title}
                            </div>
                        }
                        <div className="RateContainer">
                            <div key={`avis produit : ${produit} de la page: `}>{produit.rating.rate}</div>
                            <div key={`nombre avis produit : ${produit} de la page: `}>{produit.rating.count}</div>
                        </div>
                        <div className="price" key={`prix produit : ${produit} de la page: `}>
                            {produit.price}
                        </div>
                    </div>
                );
            }
        });
    }

    const pages = [];
    while (produitCase.length > 0) {
        pages.push(produitCase.splice(0, elementPerPage));
    }
    nbrPage = pages.length;

    return (
        <section className="Container">
            <h1> Catégorie : {category === "general" ? "général" : category} </h1>
            {pages[numPage] && <div className="articleContainer">{pages[numPage]}</div>}
            <PaginationBar numPage={numPage} setnumPage={setNumPage} nbrPage={nbrPage} />
        </section>
    );
}

export default ProductDisplay;
