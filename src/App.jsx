// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { products } from "./api/bdd.js";

// import "./style.css";

// function CategorySelection() {
//     const NumberProducts = parseInt(products[products.length - 1].id);

//     let lastCateg = "";
//     let row = [];
//     const uniqueCategories = new Set();

//     const [categorySelected, setCategorySelected] = useState("");

//     for (let i = 0; i < NumberProducts; i++) {
//         if (lastCateg !== products[i].category && !uniqueCategories.has(products[i].category)) {
//             lastCateg = products[i].category;
//             row.push(
//                 <div className="category" key={`categorie : ${products[i].category}`} onClick={() => setCategorySelected(products[i].category)}>
//                     {" "}
//                     {products[i].category}
//                 </div>
//             );
//             uniqueCategories.add(products[i].category);
//         }
//     }
//     console.log(categorySelected); // lors du clic categorySELECTED prend le nom de la categorie !

//     return <header className="categoryContainer">{row}</header>;
// }
// function NavSelectBarre({ nbrPage, numPage, setnumPage }) {
//     const IncrementPage = (choice) => {
//         choice
//             ? numPage !== nbrPage - 1
//                 ? setnumPage((prevNumPage) => prevNumPage + 1)
//                 : window.alert("Vous êtes à la dérniere page !")
//             : numPage !== 0
//             ? setnumPage((prevNumPage) => prevNumPage - 1)
//             : window.alert("Vous êtes déjà à la page 0 !");
//     };

//     return (
//         <div className="NavSelectBarre">
//             <div onClick={() => IncrementPage(false)}>-</div>
//             <div>{numPage + 1}</div>
//             <div onClick={() => IncrementPage(true)}>+</div>
//         </div>
//     );
// }

// function ViewProduct({ img, title, rate, rateCount, price }) {
//     return (
//         <article className="Article" onClick={() => ViewProduct()}>
//             <img src={img} alt={"Photo : " + title} />
//             <div className="title">{products[produit].title}</div>
//             <div className="RateContainer">
//                 <div>{rate}</div>
//                 <div>{rateCount}</div>
//             </div>
//             <div className="price">{price}</div>
//         </article>
//     );
// }
// function App() {
//     const NumberProducts = parseInt(products[products.length - 1].id);
//     const [numPage, setnumPage] = useState(0);
//     const nbrProductPage = 6;

//     const awa = true; /// test pour les catégories
//     let Pages = [];
//     let nbrPage = Math.ceil(NumberProducts / nbrProductPage);
//     console.log(nbrPage);

//     let x = 0;
//     for (let page = 0; page < nbrPage; page++) {
//         let contentPage = [];
//         for (let produit = x; produit < Math.min(x + nbrProductPage, NumberProducts); produit++) {
//             if (awa) {
//                 /// test pour les catégories
//                 contentPage.push(
//                     <article
//                         className="Article"
//                         onClick={() => (
//                             <ViewProduct
//                                 key={`product num: ${produit} de la page: ${page}`}
//                                 img={products[produit].image}
//                                 title={products[produit].title}
//                                 rate={products[produit].rating.rate}
//                                 rateCount={products[produit].rating.count}
//                                 price={products[produit].price}
//                             />
//                         )}
//                     >
//                         <img
//                             key={`Photo produit : ${produit} de la page: ${page}`}
//                             src={products[produit].image}
//                             alt={"Photo produit : ${produit}" + produit}
//                         />
//                         {
//                             <div className="title" key={`titre produit : ${produit} de la page: ${page}`}>
//                                 {products[produit].title}
//                             </div>
//                         }
//                         <div className="RateContainer">
//                             <div key={`avis produit : ${produit} de la page: ${page}`}>{products[produit].rating.rate}</div>
//                             <div key={`nombre avis produit : ${produit} de la page: ${page}`}>{products[produit].rating.count}</div>
//                         </div>
//                         <div className="price" key={`prix produit : ${produit} de la page: ${page}`}>
//                             {products[produit].price + "€"}
//                         </div>
//                     </article>
//                 );
//             }
//         }
//         Pages.push(<section className="articleContainer">{contentPage}</section>);
//         x = x + nbrProductPage;
//     }

//     return (
//         <div className="mainPage">
//             {CategorySelection()}
//             {Pages[numPage]}
//             <NavSelectBarre nbrPage={nbrPage} numPage={numPage} setnumPage={setnumPage} />
//         </div>
//     );
// }

// export default App;
