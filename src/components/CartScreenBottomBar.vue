<template>
  <div class="cart-bottom-bar">
    <div class="cart-total">
      <p class="cart-total__title">Tổng cộng</p>
      <p class="cart-total__value">{{ toVND(totalPrice) }}</p>
    </div>
    <button v-on:click="checkout" class="cart-checkout">Thanh toán</button>
  </div>
</template>

<script>
import { toVND } from "../helper";

export default {
  methods: {
    toVND,
    checkout() {
      if (this.items.length) {
        this.$store.commit("createOrder", {
          items: this.items,
          customer: {
            lastName: "Nam",
            firstName: "Giang",
          },
        });
        window.alert("Đặt hàng thành công");
      } else {
        window.alert("Giỏ hàng của bạn đang trống.");
      }
    },
  },
  computed: {
    totalPrice() {
      return this.$store.getters.totalPrice;
    },
    items() {
      return this.$store.state.cart.items;
    },
  },
};
</script>

<style scoped>
.cart-bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-top: 2px solid #0b74e5;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.cart-total__title {
  color: #242424;
  padding-bottom: 5px;
  font-size: 0.9em;
}
.cart-total__value {
  font-size: 1.1em;
  font-weight: bold;
  color: #ff424e;
}
.cart-checkout {
  padding: 10px 20px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  background-color: #ff424e;
  color: white;
  align-self: center;
  cursor: pointer;
}
</style>
