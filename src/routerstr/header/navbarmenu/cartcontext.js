import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const removeItemFromCart = (index) => {
    setOrderItems((prevItems) => {
      const updatedItems = [...prevItems];
      const currentItem = updatedItems[index];
  
      if (currentItem.quantity > 1) {
        // If the item quantity is greater than 1, decrease the quantity by 1
        updatedItems[index] = {
          ...currentItem,
          quantity: currentItem.quantity - 1,
        };
      } else {
        // If the item quantity is 1, remove the item from the cart
        updatedItems.splice(index, 1);
      }
  
      return updatedItems;
    });
  };
  
  const addItemToCart = (item) => {
    const existingItem = orderItems.find((cartItem) => cartItem.article === item.article);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      setOrderItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.article === item.article ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      // If the item is not in the cart, add it with quantity 1
      setOrderItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  

  const clearCart = () => {
    setOrderItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        orderItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
