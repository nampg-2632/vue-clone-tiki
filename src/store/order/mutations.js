export default {
  createOrder(state, payload) {
    const { customer, items } = payload;
    const totalPrice = items.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);

    state.push({
      _id: Math.random().toString(),
      customer,
      items,
      totalPrice,
    });
  },
};
