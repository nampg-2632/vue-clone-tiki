<template>
  <ul class="bottom-bar">
    <li class="bottom-bar__item">
      <img
        src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-home.png"
        alt=""
      />
      <span>Trang chủ</span>
    </li>
    <li class="bottom-bar__item">
      <img
        src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png"
        alt=""
      />
      <span>Danh mục</span>
    </li>
    <li class="bottom-bar__item">
      <img
        src="https://salt.tikicdn.com/ts/upload/c3/9b/0e/1867ff54d9f4d07f3f7fe1a7f19a79ee.png"
        alt=""
      />
      <span>Lướt</span>
    </li>
    <li class="bottom-bar__item">
      <img
        src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/noti.png"
        alt=""
      />
      <span>Thông báo</span>
    </li>
    <li class="bottom-bar__item">
      <img
        src="https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/account.png"
        alt=""
      />
      <span>Cá nhân</span>
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.bottom-bar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: fixed;
  background-color: white;
  height: 64px;
  width: 100%;
  z-index: 99;
  bottom: 0;
  left: 0;
}
.bottom-bar__item {
  display: flex;
  flex-direction: column;
  /* grid-auto-columns: span 1; */
  /* padding: 10px; */
  margin: 10px 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bottom-bar__item img {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}
.bottom-bar__item span {
  font-size: 0.8em;
}
</style>
