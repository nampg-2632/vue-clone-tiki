export default {
  createOrder({ commit }, payload) {
    commit("createOrder", payload);
    commit("clearCart");
  },
};
