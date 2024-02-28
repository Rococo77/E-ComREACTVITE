import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

function CategorySelection() {
   const [productsCategories, setProductsCategories] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios("https://fakestoreapi.com/products/categories");
         setProductsCategories(result.data);
      };

      fetchData();
   }, []);

   const [categorySelected, setCategorySelected] = useState(true);
   const row = productsCategories.map((category, index) => (
      <div className="category" key={index} onClick={() => setCategorySelected(category)}>
         {category}
      </div>
   ));

   return (
      <main>
         <header className="categoryContainer">{row}</header>
         {productForCategory(categorySelected)}
      </main>
   );
}

function productForCategory(category) {
   console.log(category);

   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios("https://fakestoreapi.com/products");
         setProducts(result.data);
      };

      fetchData();
   }, []);

   let produitCase = [];
   if (category === true) {
      products.map((produit, index) =>
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
      products.map((produit, index) => {
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

   return <div className="articleContainer">{produitCase}</div>;
}

export default CategorySelection;
