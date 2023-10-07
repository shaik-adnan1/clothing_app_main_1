import { useContext } from "react";

import Button from "../button/button.component";
import { CartContext } from "../../context/cart.context";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button> GO TO CHECKOUT </Button>
    </div>
  );
};
 
export default CartDropdown;
