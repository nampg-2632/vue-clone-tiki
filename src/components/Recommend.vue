<template>
  <div class="recommend">
    <div class="recommend__heading">
      <h4>Gợi ý hôm nay</h4>
    </div>
    <div class="recommend__items">
      <a href="" class="recommend__item" :key="index" v-for="index in 5">
        <div class="recommend__image">
          <img
            class="recommend__item-image"
            :src="products[0].imgUrl"
            alt="products[0].name"
          />
          <img
            class="recommend__promotion"
            src="https://salt.tikicdn.com/ts/upload/dc/0d/49/ef9dc5d8164bd62b011e54276502b342.png"
            alt=""
          />
        </div>
        <p>{{ products[0].name }}</p>
        <item-stars :point="4"></item-stars>
        <p class="recommend__item-price">
          <span>{{ products[0].price }}</span
          ><span> đ</span>
          <span class="recommend__item-discount"
            >-{{ products[0].discount.value
            }}{{ products[0].discount.unit }}</span
          >
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import ItemStars from "./ItemStars.vue";
export default {
  data() {
    return {
      products: [
        {
          name: "Đèn pin mini siêu sáng",
          sold: 100,
          price: 86000,
          discount: {
            value: 50,
            unit: "%",
          },
          star: 4,
          imgUrl:
            "https://salt.tikicdn.com/cache/w200/ts/product/cb/12/d5/af8325d164146466046581d008b7b781.jpg",
        },
        {},
      ],
    };
  },
  components: {
    "item-stars": ItemStars,
  },
};
</script>

<style scoped>
.recommend {
  padding: 10px 0;
}
.recommend__item .recommend__item-image {
  width: 100%;
}
.recommend__heading {
  padding: 0 15px 12px 15px;
}
.recommend__items {
  padding: 0 5px;
  display: grid;
  row-gap: 20px;
  grid-template-columns: 1fr 1fr;
}
.recommend__item {
  padding: 0 2px;
}
.recommend__image {
  position: relative;
}
.recommend__promotion {
  position: absolute;
  bottom: 0px;
  left: 0;
  height: 24px;
  object-fit: contain;
}
.recommend__item-sold {
  font-size: 0.8em;
  margin-left: 2px;
  padding-left: 5px;
  border-left: 1px solid grey;
}
.recommend__item-price {
  font-weight: bold;
}
.recommend__item-discount {
  padding: 2px 5px;
  color: white;
  margin-left: 5px;
  font-size: 0.8em;
  background-color: #ff424e;
}
</style>
