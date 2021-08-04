<template>
  <div class="home-screen">
    <app-header></app-header>
    <home-banner></home-banner>
    <home-quick-links></home-quick-links>
    <home-categories></home-categories>
    <home-recommend></home-recommend>
    <home-bottom-bar></home-bottom-bar>

    <div class="bottom-bar-space"></div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import BannerSlider from "../components/BannerSlider.vue";
import Categories from "../components/Categories.vue";
import Recommend from "../components/Recommend.vue";
import BottomBar from "../components/BottomBar.vue";
import QuickLinks from "../components/QuickLinks.vue";

export default {
  data() {
    return {};
  },
  components: {
    "app-header": Header,
    "home-banner": BannerSlider,
    "home-categories": Categories,
    "home-recommend": Recommend,
    "home-bottom-bar": BottomBar,
    "home-quick-links": QuickLinks,
  },
};
</script>

<style scoped>
/* base styles */

/* fonts */

/* mobile styles */
.home-screen {
  background-color: white;
}
.bottom-bar-space {
  width: 100%;
  height: 64px;
}

/* small tablet styles */
@media screen and (min-width: 620px) {
}

/* large tablet and laptop styles */
@media screen and (min-width: 960px) {
  body {
    font-size: 18px;
  }
}

/* desktop styles */
@media screen and (min-width: 1200px) {
  body {
    font-size: 20px;
  }
}
</style>
