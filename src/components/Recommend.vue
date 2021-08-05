<template>
  <div class="recommend">
    <div class="recommend__heading">
      <h4>Gợi ý hôm nay</h4>
    </div>
    <product-card-list :products="products"></product-card-list>
  </div>
</template>

<script>
import axios from "axios";
import ProductCardList from "./ProductCardList.vue";

const VUE_APP_API_ENDPOINT = process.env.VUE_APP_API_ENDPOINT;

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    "product-card-list": ProductCardList,
  },
  async mounted() {
    try {
      const { data } = await axios.get(`${VUE_APP_API_ENDPOINT}/products`);
      this.products = data;
    } catch (error) {
      console.log(error);
    }
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
