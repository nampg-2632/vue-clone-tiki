<template>
  <div class="recommend">
    <div class="recommend__heading">
      <h4>Gợi ý hôm nay</h4>
    </div>
    <product-card-list :products="products"></product-card-list>
  </div>
</template>

<script>
import ProductCardList from "./ProductCardList.vue";

export default {
  data() {
    return {
      products: [
        {
          _id: "T001",
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
        {
          _id: "T002",
          name: "Súp lơ xanh",
          sold: 120,
          price: 53000,
          discount: {
            value: 26,
            unit: "%",
          },
          star: 5,
          imgUrl:
            "https://salt.tikicdn.com/cache/200x200/ts/product/72/73/df/32874df2e97e42dc30d219150601262e.png",
        },
        {
          _id: "T003",
          name: "Xiaomi Miband 6 quốc tế",
          sold: 200,
          price: 1090000,
          discount: {
            value: 16,
            unit: "%",
          },
          star: 4,
          imgUrl:
            "https://salt.tikicdn.com/cache/200x200/ts/product/8d/ae/26/e221b7c4e41f99182eb47761124ec6f3.jpg",
        },
      ],
    };
  },
  components: {
    "product-card-list": ProductCardList,
  },
};
</script>

<style scoped>
.recommend {
  padding: 10px 0;
}

.recommend__heading {
  padding: 0 15px 12px 15px;
}
</style>
