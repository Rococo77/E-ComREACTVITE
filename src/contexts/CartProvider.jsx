// contexts/CartContext/CartProvider.js
import React, { useReducer } from "react";
import CartContext from "./CartContext";
import cartReducer from "./CartReducer"; 


const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    totalPrice: 0,
  });

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "INCREASE_QUANTITY", product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE_QUANTITY", product });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
