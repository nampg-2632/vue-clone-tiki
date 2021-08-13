export default {
  addToCart(state, item) {
    const itemId = item._id;
    const itemIndex = state.items.findIndex((item) => item._id === itemId);
    if (itemIndex > -1) {
      state.items[itemIndex].quantity += 1;
    } else {
      state.items.push({ ...item, quantity: 1 });
    }
  },
  removeFromCart(state, itemId) {
    const newCartItems = state.items.filter((item) => item._id !== itemId);
    state.items = newCartItems;
  },
  setItemQuantity(state, payload) {
    const { itemId, quantity } = payload;
    const itemIndex = state.items.findIndex((item) => item._id === itemId);
    if (itemIndex > -1) {
      state.items[itemIndex].quantity = quantity;
    }
  },
  clearCart(state) {
    state.items = [];
  },
};
