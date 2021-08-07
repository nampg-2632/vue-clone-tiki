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
import CartScreenProduct from "./CartScreenProduct.vue";

export default {
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
  },
  components: {
    CartScreenProduct,
  },
};
</script>
<style scoped>
.cart-products {
  margin-top: 60px;
  margin-bottom: 75px;
}
</style>
