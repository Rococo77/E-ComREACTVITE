import ApiProducts from "./api/apiProducts";

import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";

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
        <main className="mainPage">
            <header className="categoryContainer">
                {row}
                <div> Search</div>
            </header>
            {ProductDisplay(categorySelected, numPage, setNumPage)}
        </main>
    );
}

export default App;
