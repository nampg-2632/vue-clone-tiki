<template>
  <div class="cart-screen">
    <cart-screen-header></cart-screen-header>
    <cart-screen-products></cart-screen-products>
    <cart-screen-bottom-bar></cart-screen-bottom-bar>

    <div class="cart-products"></div>
  </div>
</template>

<script>
import CartScreenHeader from "../components/CartScreenHeader.vue";
import CartScreenBottomBar from "../components/CartScreenBottomBar.vue";
import CartScreenProducts from "../components/CartScreenProducts.vue";
export default {
  components: {
    "cart-screen-header": CartScreenHeader,
    "cart-screen-bottom-bar": CartScreenBottomBar,
    "cart-screen-products": CartScreenProducts,
  },
};
</script>
