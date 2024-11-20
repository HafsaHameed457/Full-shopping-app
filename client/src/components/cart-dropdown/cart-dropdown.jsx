import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import Button from "../button/button";
import React from "react";
import CartItem from "../cart-item/cart-item";

const CartDropDown = () => {
  const { setCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckout}>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
