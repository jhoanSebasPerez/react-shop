import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectShoppingCart = createSelector(
  [selectCart],
  (cart) => cart.shoppingcart
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCountCartItems = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.length > 0
      ? cartItems.reduce((acc, curr) => acc + curr.qty, 0)
      : 0
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.qty * cartItem.price, 0)
);
