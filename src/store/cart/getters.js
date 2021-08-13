export default {
  itemsCount: (state) =>
    state.items.reduce((count, item) => count + item.quantity, 0),
  totalPrice: (state) =>
    state.items.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0),
};
