import ApiProducts from "./api/apiProducts";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";
import SearchBar from "./components/searchBar";
function App() {
    const [productsCategories, setProductsCategories] = ApiProducts();

    const [categorySelected, setCategorySelected] = useState("general");
    const [numPage, setNumPage] = useState(0);

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

    return (
        <Router>
            <main className="mainPage">
                <header className="categoryContainer">
                    {row}
                    <SearchBar />
                </header>
                <Routes>
                    <Route path="/" element={ProductDisplay(categorySelected, numPage, setNumPage)} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
