export const addItemToCart = (cartItems, itemToAdd) => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItem) {
    return cartItems.map((item) => {
      if (item.id === existingItem.id) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });
  }

  return [...cartItems, { ...itemToAdd, qty: 1 }];
};

export const decreaseQtyCartItem = (cartItems, itemToDecrease) => {
  const existingItem = cartItems.find((item) => item.id === itemToDecrease.id);

  if (existingItem.qty === 1) {
    return cartItems.filter((item) => item.id !== itemToDecrease.id);
  }

  return cartItems.map((item) =>
    item.id === itemToDecrease.id ? { ...item, qty: item.qty - 1 } : item
  );
};
