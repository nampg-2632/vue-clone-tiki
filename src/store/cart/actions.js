export default {
  addToCart({ commit }, item) {
    commit("addToCart", item);
  },
  removeFromCart({ commit }, itemId) {
    commit("removeFromCart", itemId);
  },
  setItemQuantity({ commit }, payload) {
    commit("setItemQuantity", payload);
  },
};
