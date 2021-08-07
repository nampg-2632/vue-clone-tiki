<template>
  <div class="item-star">
    <star :key="'light-' + num" v-for="num in point" :light="true"></star>
    <star :key="num" v-for="num in 5 - point" :light="false"></star>
  </div>
</template>

<script>
import Star from "./Star.vue";
export default {
  props: ["point"],
  components: {
    star: Star,
  },
};
</script>

<style scoped>
.item-star {
  margin-bottom: 2px;
}
</style>
