<template>
  <header class="header">
    <div class="header__top">
      <a class="header__free-ship" href="">
        <img
          src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
          alt="free ship"
        />
      </a>
      <a class="header__brand" href="">
        <img
          src="https://salt.tikicdn.com/ts/upload/d4/ca/89/28d85ed27396c1beebad8a3fec18bfe4.png"
          alt="brand"
        />
      </a>
      <a class="header__cart" href="">
        <img
          src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png"
          alt="cart"
        />
      </a>
    </div>
    <div class="header__search-bar">
      <img
        src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png"
        alt="search"
      />
      <input type="text" placeholder="Bạn tìm gì hôm nay?" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* mobile styles */
.header {
  background-color: #be2330;
  padding-bottom: 14px;
}
.header__top {
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 10px;
  position: relative;
}
.header__top img {
  height: 100%;
}
.header__free-ship {
  height: 14px;
}
.header__brand {
  height: 27px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.header__cart {
  height: 24px;
}
.header__search-bar {
  height: 36px;
  display: flex;
  margin: 0 10px;
  background-color: white;
  align-items: center;
}
.header__search-bar img {
  height: 80%;
  padding: 0 5px;
}
.header__search-bar input {
  width: 100%;
  border: none;
  outline: none;
  font-size: 1em;
  /* padding-left: 10px; */
}
</style>
