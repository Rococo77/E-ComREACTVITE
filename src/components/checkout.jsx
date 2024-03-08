import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/productContext";
import axios from "axios";
import { Link } from "react-router-dom";

function Checkout() {
   const { clickCounts } = useContext(ProductContext);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         const fetchedProducts = [];
         for (const item of clickCounts) {
            const response = await axios.get(`https://fakestoreapi.com/products/${item.id}`);
            const productWithCount = { ...response.data, count: item.count };
            fetchedProducts.push(productWithCount);
         }
         setProducts(fetchedProducts);
      };

      fetchProducts();
   }, [clickCounts]);

   const handleIncrease = (product) => {
      setProducts(products.map((item) => (item.id === product.id ? { ...item, count: item.count + 1 } : item)));
   };

   const handleDecrease = (product) => {
      if (product.count > 0) {
         setProducts(products.map((item) => (item.id === product.id ? { ...item, count: item.count - 1 } : item)));
      }
   };
   if (products.length === 0) {
      return (
         <div style={{ boxShadow: "0 0 0 1px green", minHeight: "90vh" }}>
            <div style={{ position: "relative", height: "70px" }}>
               <Link to="/" style={{ position: "absolute", left: "10%", top: "50%", transform: "translate(-50%, -50%)" }}>
                  Retour à la page d'accueil
               </Link>

               <h1 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 1px" }}>Checkout</h1>
            </div>
            <div>
               <p style={{ width: "100%", textAlign: "center" }}>Votre panier est vide !</p>
            </div>
         </div>
      );
   }

   let sommeTotal = 0;
   return (
      <div style={{ boxShadow: "0 0 0 1px green", minHeight: "90vh" }}>
         <div style={{ position: "relative", height: "70px" }}>
            <Link to="/" style={{ position: "absolute", left: "10%", top: "50%", transform: "translate(-50%, -50%)" }}>
               Retour à la page d'accueil
            </Link>

            <h1 style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", boxShadow: "0 0 0 1px" }}>Checkout</h1>
         </div>
         {products.map((product, index) => (
            <div key={index} className="Article">
               <h2>{product.title}</h2>
               <img src={product.image} alt={product.title} />
               <p>{product.description}</p>
               <p>Prix: {product.price}</p>
               <p> Prix total : {(sommeTotal = sommeTotal + product.price * product.count)}</p>
               <div style={{ width: "100%" }}>
                  <button onClick={() => handleIncrease(product)} style={{ width: "50%" }}>
                     +1
                  </button>
                  {product.count >= 1 && (
                     <button onClick={() => handleDecrease(product)} style={{ width: "50%" }}>
                        -1
                     </button>
                  )}
               </div>
               <p>Nombre de produits: {product.count}</p>
            </div>
         ))}
         <div> Prix total : {sommeTotal}</div>
      </div>
   );
}

export default Checkout;
