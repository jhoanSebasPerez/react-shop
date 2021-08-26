import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  decreaseQtyItem,
  addToCart,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ item, removeCartItem, decreaseQtyItem, addToCart }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <div className="quantity">
        <div className="arrow" onClick={() => decreaseQtyItem(item)}>
          &#10094;
        </div>
        <span className="value">{item.qty}</span>
        <div className="arrow" onClick={() => addToCart(item)}>
          &#10095;
        </div>
      </div>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => removeCartItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeCartItem: (item) => dispatch(removeItem(item)),
  decreaseQtyItem: (item) => dispatch(decreaseQtyItem(item)),
  addToCart: (item) => dispatch(addToCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
