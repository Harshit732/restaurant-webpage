import React, { createContext, useContext, useState } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (dish) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === dish.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === dish.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...dish, quantity: 1 }];
    });
  };

  
  const incrementQuantity = (name) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const decrementQuantity = (name) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) 
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
