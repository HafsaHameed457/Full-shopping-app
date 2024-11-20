import { ReactComponent as Logo } from "../../assets/crown.svg";
import React from "react";
import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./nav.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutAuth } from "../../utlis/firebase.utlis";

import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown";

import { CartContext } from "../../contexts/cartContext";

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-links" to="/shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-links" onClick={signOutAuth}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-links" to="/auth">
              SignIn
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
