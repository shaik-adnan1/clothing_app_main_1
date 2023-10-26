import {
  CartItemContainer,
  ItemDetails,
  CartItemName,
} from "./cart-item.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageurl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageurl} alt={name} />
      <ItemDetails>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
