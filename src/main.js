import Vue from "vue";
import VueRouter from "vue-router";

import store from "./store/store";

import Home from "./screens/Home.vue";
import Cart from "./screens/Cart.vue";

Vue.use(VueRouter);
Vue.config.devtools = true;

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
];

const router = new VueRouter({
  routes,
});

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
