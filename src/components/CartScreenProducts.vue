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
  data() {
    return {
      cartItems: [
        {
          name: "Màn Hình Samsung LS24R350FHEXXV 24inch",
          imgUrl:
            "https://salt.tikicdn.com/cache/w160/ts/product/58/03/a1/54172996216b0eea1fc9eefc55e9c4a0.jpg",
          price: 3590000,
          fakePrice: 3999000,
          isTikiFast: false,
          quantity: 1,
        },
        {
          name: "Màn Hình Samsung LS24R350FHEXXV 24inch",
          imgUrl:
            "https://salt.tikicdn.com/cache/w160/ts/product/58/03/a1/54172996216b0eea1fc9eefc55e9c4a0.jpg",
          price: 3590000,
          fakePrice: 3999000,
          isTikiFast: true,
          quantity: 1,
        },
      ],
    };
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
