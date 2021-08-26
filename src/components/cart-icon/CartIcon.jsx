import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { showShoppingCart } from "../../redux/cart/cart.actions";
import { selectCountCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ showShoppingCart, countCartItems }) => {
  return (
    <div className="cart-icon" onClick={() => showShoppingCart()}>
      <ShopIcon className="shopping-icon" />
      <span className="item-count">{countCartItems}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  showShoppingCart: () => dispatch(showShoppingCart()),
});

const mapStateToProps = createStructuredSelector({
  countCartItems: selectCountCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
