import { useContext } from 'react';
import CartContext from './CartContext';

const UseCart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return { cart, addToCart, removeFromCart };
};

export default UseCart;