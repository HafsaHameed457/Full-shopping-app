import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import React from "react";
import { CartContext } from "../../contexts/cartContext";
import { useContext } from "react";

const CartIcon = () => {
  const { isCartOpen, setCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
