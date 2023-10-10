import { useContext } from "react";
import { CartContext } from "../../context/cart.context";


import { CartItemContainer, ItemCount, ShoppingIcon } from  "./cart-icon.style.jsx";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

  return (
  <CartItemContainer onClick={toggleIsCartOpen}>
    <ShoppingIcon />
    <ItemCount>{cartCount}</ItemCount>
  </CartItemContainer>
  );
};


export default CartIcon;