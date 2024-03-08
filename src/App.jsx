import ApiProducts from "./api/apiProducts";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { useState } from "react";
import ProductDisplay from "./components/ProductDisplay";
import SearchBar from "./components/searchBar";
import Checkout from "./components/checkout";
import Login from "./components/LoginPage";

import { ProductContext } from "./context/productContext";
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
      <ProductContext.Provider value={{ clickCounts, handleContextClick }}>
         <Router>
            <main className="mainPage">
               <header className="categoryContainer">
                  <div style={{ width: "60%" }}>{row}</div>
                  <SearchBar />
                  <Link to={"/checkout"} style={{ width: "15%", boxShadow: "0 0 0 1px", textAlign: "center" }}>
                     Panier
                  </Link>
                  <Link to={"/login"} style={{ width: "5%", boxShadow: "0 0 0 1px", textAlign: "center" }}>
                     User
                  </Link>
               </header>
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
