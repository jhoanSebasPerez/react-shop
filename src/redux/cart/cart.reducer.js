import { CartActionTypes } from "./cart.action.types";
import { addItemToCart, decreaseQtyCartItem } from "./cart.utils";

const INITIAL_STATE = {
  shoppingcart: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.SHOW_SHOPPING_CART:
      return { ...state, shoppingcart: !state.shoppingcart };
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case CartActionTypes.DECREASE_QTY_ITEM:
      return {
        ...state,
        cartItems: decreaseQtyCartItem(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
