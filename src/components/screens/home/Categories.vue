<template>
  <div class="categories">
    <div class="categories__heading">
      <h4>Danh mục nổi bật</h4>
      <a class="categories__see-more" href="">XEM THÊM</a>
    </div>
    <div class="categories__items">
      <a
        :key="category.name"
        v-for="category in categories"
        href=""
        class="categories__item"
      >
        <div class="categories__img-wrap">
          <img :src="category.imgUrl" alt="item" />
        </div>
        <span>{{ category.name }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "Rau củ quả",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/e0/30/8b/23a85f0f539c1724a6f9d188dc01e736.jpg",
        },
        {
          name: "Giày thể thao",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/f5/71/8e/ae12236112d7f13c05d17e984a5ab568.JPG",
        },
        {
          name: "Balo",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/11/da/a6/96b1edc01800ae8cd3b7db8f983757f6.jpg",
        },
        {
          name: "Đèn pin",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/3a/82/10/367cdd8fc8ecb810f94d06ce57674d65.jpg",
        },
        {
          name: "Thịt heo",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/c5/96/18/a2aae843fff9c43ea63e661b1708165e.jpg",
        },
        {
          name: "Nồi chiên",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/07/2a/9f/f827733c48227f3779e6c829a4177bf4.jpg",
        },
        {
          name: "Trái cây nội địa",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/69/d6/9c/bada3d5e45b3602f2790e7c06cd239cd.png",
        },
        {
          name: "Điện thoại, smartphone",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/5b/b2/c4/9574b9439edac59ab025881b9e62fc18.jpg",
        },
        {
          name: "Sách tài chính",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/92/54/aa/c5b45e3ea25c42e146b4053e1d812183.jpg",
        },
        {
          name: "Tiểu thuyết",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/5e/18/24/2a6154ba08df6ce6161c13f4303fa19e.jpg",
        },
        {
          name: "Thịt bò",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/69/20/f3/7de521432ca4b4cea21aa08d36bd7c01.jpg",
        },
        {
          name: "Kệ và tủ",
          imgUrl:
            "https://salt.tikicdn.com/cache/w100/ts/product/f8/17/21/e5401e6586fcc099c882d54233199eed.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* mobile styles */
.categories {
  padding: 10px;
  border-bottom: 2px solid #be2330;
}
.categories__see-more {
  color: #0d5cb6;
}
.categories__heading {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
}
.categories__items {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(auto-fill, 78.75px);
  grid-auto-columns: 78.75px;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  overflow-x: scroll;
}
.categories__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.categories__item img {
  height: 48px;
  width: 48px;
  margin-bottom: 8px;
  mix-blend-mode: multiply;
  border-radius: 20px;
}
.categories__img-wrap {
  height: 48px;
  width: 48px;
  border-radius: 20px;
  background-color: rgba(27, 168, 255, 0.07);
}
.categories__item span {
  padding: 0 5px;
  font-size: 0.8em;
}
</style>
