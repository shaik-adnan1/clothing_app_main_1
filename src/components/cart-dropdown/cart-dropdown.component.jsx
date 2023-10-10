import { useContext } from "react";
import  { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../context/cart.context";


import { CartDropDownContainer, EmptyMessage, CartItems } from "./cart-dropdown.style.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const gotoCheckOutHandler = () => {
    navigate('/checkout')
  }

  return (
    <CartDropDownContainer>
      <CartItems>
        {
        cartItems.length? cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        )): <EmptyMessage>Your cart is Empty</EmptyMessage>
        }
      </CartItems>
      <Button onClick={gotoCheckOutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropDownContainer>
  );
};
 
export default CartDropdown;
