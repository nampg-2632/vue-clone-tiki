<template>
  <div class="quick-links">
    <a
      :key="quickLink.name"
      v-for="quickLink in quickLinks"
      href=""
      class="quick-links__item"
    >
      <img :src="quickLink.imgUrl" alt="item" />
      <span>{{ quickLink.name }}</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        {
          name: "Mã giảm giá",
          imgUrl:
            "https://salt.tikicdn.com/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png",
        },
        {
          name: "Không giới hạn",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/51/34/7a/f0e1104c14349c93721da0d93ab05981.png",
        },
        {
          name: "Bình ổn giá",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/39/bc/ad/bc34525c4de1d0d72ef549eea21ab50e.png",
        },
        {
          name: "Free ship",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/c2/da/13/638cc2dc09b1be2e148c0571a107281a.png",
        },
        {
          name: "Bí kíp săn sale",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/5b/69/8a/ca887145ea426662eb1c77e239741aec.jpg",
        },
        {
          name: "Gói hội viên",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/ce/ee/fe/a8a350727b38a1e20ce1610c5162fcb7.png",
        },
        {
          name: "Ticketbox",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/55/ce/1a/5abd04cf14838897f548c4a50ce85bb1.png",
        },
        {
          name: "Giảm đến 50%",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/upload/e4/74/3d/aafbdc961842e88bdc8cfbb08debe4fa.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* mobile styles */
.quick-links {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 2px solid #be2330;
}
.quick-links__item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.quick-links__item img {
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
}
.quick-links__item span {
  font-size: 0.8em;
  text-align: center;
  padding: 0 5px;
}
</style>
