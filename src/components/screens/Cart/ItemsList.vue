<template>
  <div class="cart-products">
    <item
      :key="index"
      v-for="(item, index) in cartItems"
      :product="item"
    ></item>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    },
  },
  components: {
    Item,
  },
};
</script>
<style scoped>
.cart-products {
  margin-top: 60px;
  margin-bottom: 75px;
}
</style>
