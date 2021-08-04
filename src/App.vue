<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
/* variables */

/* reset */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

html,
body {
  width: 100%;
  overflow-x: hidden;
  background-color: #efefef;
}

a {
  color: black;
  text-decoration: none;
}

img {
  display: block;
}
</style>
