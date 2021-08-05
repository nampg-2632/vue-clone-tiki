<template>
  <div href="" class="product-card">
    <div class="recommend__image">
      <img
        class="product-card-image"
        :src="product.imgUrl"
        :alt="product.name"
      />
      <img
        class="recommend__promotion"
        src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png"
        alt=""
      />
    </div>
    <p class="product-card-name">{{ product.name }}</p>
    <item-stars :point="4"></item-stars>
    <p class="product-card-price">
      <span>{{ toVND(product.price) }}</span>
      <span class="product-card-discount"
        >-{{ product.discount.value }}{{ product.discount.unit }}</span
      >
    </p>
    <button v-on:click="addToCart" class="product-card__button-add-to-cart">
      Add to cart
    </button>
  </div>
</template>

<script>
import { toVND } from "../helper";

import store from "../store/store";
import ItemStars from "./ItemStars.vue";

export default {
  props: ["product"],
  components: {
    "item-stars": ItemStars,
  },
  methods: {
    addToCart() {
      store.commit("addToCart", this.product);
    },
    toVND,
  },
};
</script>

<style scoped>
.product-card .product-card-image {
  width: 100%;
}
.product-card {
  padding: 0 2px;
}
.product-card-name {
  margin-bottom: 2px;
}
.recommend__image {
  position: relative;
  margin-bottom: 8px;
}
.recommend__promotion {
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 24px;
  object-fit: contain;
}
.product-card-sold {
  font-size: 0.8em;
  margin-left: 2px;
  padding-left: 5px;
  border-left: 1px solid grey;
}
.product-card-price {
  font-weight: bold;
  margin-bottom: 3px;
}
.product-card-discount {
  padding: 2px 5px;
  color: white;
  margin-left: 5px;
  font-size: 0.8em;
  background-color: #ff424e;
}
.product-card__button-add-to-cart {
  background-color: #ffb916;
  border: none;
  padding: 10px 15px;
  color: white;
  font-size: 1em;
  margin: 10px 0;
  display: block;
  width: 100%;
  cursor: pointer;
}
</style>
