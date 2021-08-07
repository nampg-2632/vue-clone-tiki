<template>
  <header class="cart-header">
    <router-link to="/" class="cart-header__back-button">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        size="30"
        height="30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </svg>
    </router-link>
    <span class="cart-header__title"> Giỏ hàng ({{ itemsCount }}) </span>
  </header>
</template>

<script>
export default {
  computed: {
    itemsCount() {
      return this.$store.getters.itemsCount;
    },
  },
};
</script>

<style scoped>
.cart-header {
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #1ba8ff;
  align-items: center;
  padding: 10px;
  color: white;
  position: relative;
  font-size: 18px;
  position: fixed;
  top: 0;
  left: 0;
}
.cart-header a {
  color: white;
}
.cart-header__title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
