<template>
  <div class="cart-products">
    <cart-screen-product
      :key="index"
      v-for="(item, index) in cartItems"
      :product="item"
    ></cart-screen-product>
  </div>
</template>

<script>
import store from "../store/store";

import CartScreenProduct from "./CartScreenProduct.vue";

export default {
  data() {
    return {};
  },
  computed: {
    cartItems: () => store.state.cart.items,
  },
  components: {
    "cart-screen-product": CartScreenProduct,
  },
};
</script>
<style scoped>
.cart-products {
  margin-top: 60px;
  margin-bottom: 75px;
}
</style>
