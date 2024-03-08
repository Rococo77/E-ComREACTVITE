import ApiProducts from "./api/apiProducts";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";
import SearchBar from "./components/searchBar";
import Checkout from "./components/checkout";
import Login from "./components/LoginPage";
import { useLocation } from "react-router-dom";

import { ProductContext } from "./context/productContext";

function Header({ setCategorySelected, setNumPage }) {
    const [productsCategories, setProductsCategories] = ApiProducts();

    const row = productsCategories.map((category, index) => (
        <div
            className="category"
            key={index}
            onClick={() => {
                setCategorySelected(category === "general" ? "general" : category);
                setNumPage(0);
            }}
        >
            {category}
        </div>
    ));

    const location = useLocation();
    return (
        <header className="categoryContainer">
            {location.pathname === "/" ? (
                <div style={{ width: "50%" }}>{row}</div>
            ) : (
                <Link to={"/"} className="category" style={{ width: "60%", textAlign: "center" }}>
                    Accueil !
                </Link>
            )}
            <SearchBar />
            <Link to={"/checkout"} style={{ width: "15%", textAlign: "center" }}>
                Panier
            </Link>
            <Link to={"/login"} style={{ width: "5%", textAlign: "center" }}>
                User
            </Link>
        </header>
    );
}

function App() {
    const [clickCounts, setClickCounts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Nouvel état pour l'ID du produit sélectionné

    const handleContextClick = (product) => {
        setClickCounts((prevCounts) => {
            const newCounts = [...prevCounts, product];
            console.log("Nouveau tableau de clickCounts:", newCounts); // Log de débogage
            return newCounts;
        });
    };

    const [categorySelected, setCategorySelected] = useState("general");
    const [numPage, setNumPage] = useState(0);

    return (
        <ProductContext.Provider value={{ clickCounts, handleContextClick }}>
            <Router>
                <main className="mainPage">
                    <Header setCategorySelected={setCategorySelected} setNumPage={setNumPage} />
                    <Routes>
                        <Route path="/" element={ProductDisplay(categorySelected, numPage, setNumPage)} />
                        <Route path="/product/:id" element={<ProductDetail />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </main>
            </Router>
        </ProductContext.Provider>
    );
}

export default App;
