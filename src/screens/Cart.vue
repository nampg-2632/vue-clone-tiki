<template>
  <div class="cart-screen">
    <cart-header></cart-header>
    <cart-items-list></cart-items-list>
    <cart-bottom-bar></cart-bottom-bar>

    <div class="cart-products"></div>
  </div>
</template>

<script>
import Header from "../components/screens/Cart/Header.vue";
import BottomBar from "../components/screens/Cart/BottomBar.vue";
import ItemsList from "../components/screens/Cart/ItemsList.vue";

export default {
  components: {
    "cart-header": Header,
    "cart-bottom-bar": BottomBar,
    "cart-items-list": ItemsList,
  },
};
</script>
