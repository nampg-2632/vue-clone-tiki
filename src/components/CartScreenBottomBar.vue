<template>
  <div class="cart-bottom-bar">
    <div class="cart-total">
      <p class="cart-total__title">Tổng cộng</p>
      <p class="cart-total__value">10.000.000 đ</p>
    </div>
    <button class="cart-checkout">Thanh toán</button>
  </div>
</template>

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
