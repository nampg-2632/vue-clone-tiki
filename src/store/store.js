import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cart: {
      items: [],
    },
    orders: [],
  },
  mutations: {
    addToCart(state, item) {
      const itemId = item._id;
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id === itemId
      );
      if (itemIndex > -1) {
        state.cart.items[itemIndex].quantity += 1;
      } else {
        state.cart.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, itemId) {
      const newCartItems = state.cart.items.filter(
        (item) => item._id !== itemId
      );
      state.cart.items = newCartItems;
    },
    setItemQuantity(state, payload) {
      const { itemId, quantity } = payload;
      const itemIndex = state.cart.items.findIndex(
        (item) => item._id === itemId
      );
      if (itemIndex > -1) {
        state.cart.items[itemIndex].quantity = quantity;
      }
    },
    createOrder(state, payload) {
      const { customer, items } = payload;
      const totalPrice = this.getters.totalPrice;
      state.orders = [
        ...state.orders,
        {
          _id: Math.random().toString(),
          customer,
          items,
          totalPrice,
        },
      ];

      state.cart.items = [];
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit("addToCart", item);
    },
    removeFromCart({ commit }, itemId) {
      commit("removeFromCart", itemId);
    },
    setItemQuantity({ commit }, payload) {
      commit("setItemQuantity", payload);
    },
    createOrder({ commit }, payload) {
      commit("createOrder", payload);
    },
  },
  getters: {
    itemsCount: (state) =>
      state.cart.items.reduce((count, item) => count + item.quantity, 0),
    totalPrice: (state) =>
      state.cart.items.reduce((total, item) => {
        total += item.price * item.quantity;
        return total;
      }, 0),
  },
});

export default store;
