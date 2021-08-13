import Vue from "vue";
import Vuex from "vuex";

import cartStore from "./cart/store";
import orderStore from "./order/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart: cartStore,
    order: orderStore,
  },
});

export default store;
