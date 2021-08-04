<template>
  <div class="recommend__items">
    <product-card
      :product="product"
      :key="index"
      v-for="(product, index) in products"
    ></product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  data() {
    return {};
  },
  props: ["products"],
  components: {
    "product-card": ProductCard,
  },
};
</script>

<style scoped>
.recommend__items {
  padding: 0 5px;
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
</style>
