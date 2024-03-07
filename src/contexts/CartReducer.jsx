import React from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const productIndex = state.cart.findIndex((product) => product.id === action.product.id);
      if (productIndex !== -1) {
        const updatedCart = state.cart.map((product) =>
          product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
        );
        return { cart: updatedCart, totalPrice: state.totalPrice + action.product.price };
      } else {
        return { cart: [...state.cart, { ...action.product, quantity: 1 }], totalPrice: state.totalPrice + action.product.price };
      }
    }
    case 'REMOVE_FROM_CART': {
      const updatedCart = state.cart.filter((product) => product.id !== action.product.id);
      return { cart: updatedCart, totalPrice: state.totalPrice - action.product.price * action.product.quantity };
    }
    case 'INCREASE_QUANTITY': {
      const productIndex = state.cart.findIndex((product) => product.id === action.product.id);
      const updatedCart = state.cart.map((product) =>
        product.id === action.product.id ? { ...product, quantity: product.quantity + 1 } : product
      );
      return { cart: updatedCart, totalPrice: state.totalPrice + action.product.price };
    }
    case 'DECREASE_QUANTITY': {
      const productIndex = state.cart.findIndex((product) => product.id === action.product.id);
      if (state.cart[productIndex].quantity === 1) {
        const updatedCart = state.cart.filter((product) => product.id !== action.product.id);
        return { cart: updatedCart, totalPrice: state.totalPrice - action.product.price };
      } else {
        const updatedCart = state.cart.map((product) =>
          product.id === action.product.id ? { ...product, quantity: product.quantity - 1 } : product
        );
        return { cart: updatedCart, totalPrice: state.totalPrice - action.product.price };
      }
    }
    case 'CLEAR_CART':
      return { cart: [], totalPrice: 0 };
    default:
      return state;
  }
};

export default cartReducer;

  
  