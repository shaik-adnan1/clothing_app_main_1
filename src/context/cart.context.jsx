import { createContext, useContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);
  // if found, increment the quantity
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with  modified cartItems / new cartItems
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setDropdownActive: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

/*

product {
    id, 
    name, 
    price, 
    imageUrl
}


cartItems {
    id, 
    name, 
    price, 
    imageUrl,
    quantity
}

*/

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount)
  }, [cartItems]); // using useEffect

  // const value = {cartItems, setCartItems}

  const addItemToCart = productToAdd => {
    // const newCartItems = [...cartItems];
    // const existingItem = newCartItems.find(item => item.id === productToAdd.id);

    setCartItems(addCartItem(cartItems, productToAdd));
  };
  // const updateCartCount = () => {
  //   return setCartCount(cartItems.length + 1);
  // };
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    // updateCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
