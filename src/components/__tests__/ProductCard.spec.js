import { shallowMount } from "@vue/test-utils";
import ProductCard from "../ProductCard.vue";

let wrapper;
const product = {
  _id: "0002",
  id: "0002",
  sku: "A0002",
  name: "Súp lơ xanh",
  imgUrl:
    "https://salt.tikicdn.com/cache/200x200/ts/product/72/73/df/32874df2e97e42dc30d219150601262e.png",
  sold: 120,
  price: 53000,
  discount: {
    value: 26,
    unit: "%",
  },
  star: 5,
};

beforeEach(() => {
  wrapper = shallowMount(ProductCard, {
    propsData: {
      product,
    },
  });
});
afterEach(() => {
  wrapper.destroy();
});

describe("components/ProductCard.vue", () => {
  test("Mounted And Display", () => {
    expect(wrapper.vm).toBeTruthy();

    expect(wrapper.find(".product-card-name").text()).toBe(product.name);
    expect(wrapper.find(".product-card-discount").text()).toBe(
      "-" + product.discount.value + product.discount.unit
    );
  });
});
