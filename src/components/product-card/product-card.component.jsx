import "./product-card.style.scss";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, id, price, imageUrl } = product;

  // using cartContext for add to cart functionality
  // console.log(product)

  const { cartItems, addItemToCart } = useContext(CartContext);
  console.log("products")
  console.log(product)
  const addProductToCart = () => {
    addItemToCart(product);
    // updateCartCount();
    console.log(cartItems);
  };
  console.log(imageUrl)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted' onClick={addProductToCart}>
        {" "}
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
