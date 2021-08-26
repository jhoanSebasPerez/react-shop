import { CartActionTypes } from "./cart.action.types";

export const showShoppingCart = () => ({
  type: CartActionTypes.SHOW_SHOPPING_CART,
});

export const addToCart = (item) => ({
  type: CartActionTypes.ADD_TO_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const decreaseQtyItem = (item) => ({
  type: CartActionTypes.DECREASE_QTY_ITEM,
  payload: item,
});
