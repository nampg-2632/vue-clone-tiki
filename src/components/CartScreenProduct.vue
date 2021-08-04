<template>
  <div class="cart-product">
    <input class="cart-product__check" type="checkbox" name="" id="" />
    <img class="cart-product__img" :src="product.imgUrl" alt="" />
    <div class="cart-product__info">
      <p class="cart-product__name">
        <img
          class="cart-product__tiki-fast"
          src="https://salt.tikicdn.com/ts/upload/2a/47/46/0e038f5927f3af308b4500e5b243bcf6.png"
          alt=""
          v-if="product.isTikiFast"
        />
        <span>{{ product.name }}</span>
      </p>
      <p class="cart-product__price">
        <span class="cart-product__price-real">{{ product.price }} đ</span>
        <span class="cart-product__price-fake">{{ product.fakePrice }} đ</span>
      </p>
      <div class="cart-product__change-quantity">
        <button
          v-on:click="decreseQuantity"
          class="cart-product__decrease-quantity"
        >
          -
        </button>
        <input class="cart-product__quantity" v-model="product.quantity" />
        <button
          v-on:click="increseQuantity"
          class="cart-product__increase-quantity"
        >
          +
        </button>
      </div>
      <span v-on:click="remove" class="cart-product__remove">Xóa</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {};
  },
  methods: {
    increseQuantity() {},
    decreseQuantity() {},
    remove() {},
  },
};
</script>

<style scoped>
.cart-product {
  background-color: white;
  margin: 5px 0;
  display: grid;
  grid-template-columns: 1fr 3fr 9fr;
  justify-items: center;
  padding: 10px 10px;
  gap: 5px;
}
.cart-product p {
  padding-bottom: 10px;
}
.cart-product__title {
  font-size: 0.9em;
}
.cart-product__check {
  margin-top: 30px;
}
.cart-product__img {
  max-width: 90%;
}

.cart-product__tiki-fast {
  display: inline-block;
  height: 1em;
  margin-right: 5px;
}
.cart-product__price-real {
  color: rgb(255, 66, 78);
  font-weight: bold;
  font-size: 1.1em;
  margin-right: 10px;
}
.cart-product__price-fake {
  font-size: 0.9em;
  color: gray;
  text-decoration: line-through;
}
.cart-product__change-quantity {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
}
.cart-product__change-quantity button {
  background-color: rgba(128, 128, 128, 0.226);
  outline: none;
  border: none;
  padding: 5px 10px;
}
.cart-product__change-quantity button:hover {
  cursor: pointer;
}
.cart-product__change-quantity input {
  border: 1px solid rgba(128, 128, 128, 0.226);
  outline: none;
  padding: 5px 10px;
  width: 50px;
  text-align: center;
  margin: 0;
}
.cart-product__remove {
  color: #0b74e5;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
