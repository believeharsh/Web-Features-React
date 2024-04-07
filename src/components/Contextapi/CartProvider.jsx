import { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    {id:1, name:"Rice", price:10},
    {id:2, name:"Wheet", price:5},
    {id:3, name:"Methi Dana", price:7},
    {id:4, name:"Rice", price:10},
    {id:5, name:"Wheet", price:5},
    {id:6, name:"Methi Dana", price:7},
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Functions to update the cart state

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
    {children}
  </CartContext.Provider>
  );
};

export default CartProvider;