import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ItemsList from "../ItemsList.vue";
import Item from "../Item.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper, items;

beforeEach(() => {
  items = [
    {
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
      quantity: 3,
    },
    {
      _id: "0003",
      id: "0003",
      sku: "A0003",
      name: "Xiaomi Miband 6 quốc tế",
      imgUrl:
        "https://salt.tikicdn.com/cache/200x200/ts/product/8d/ae/26/e221b7c4e41f99182eb47761124ec6f3.jpg",
      sold: 200,
      price: 1090000,
      discount: {
        value: 16,
        unit: "%",
      },
      star: 4,
      quantity: 3,
    },
  ];

  const state = {
    cart: {
      items,
    },
  };
  const store = new Vuex.Store({ state });

  wrapper = mount(ItemsList, {
    store,
    localVue,
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("componets/screens/Cart?itemsList.vue", () => {
  test("Mounted", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Get Cart Items From Store", () => {
    expect(wrapper.vm.cartItems).toBe(items);
  });

  test("Display Items", () => {
    const itemsWrapper = wrapper.findAll(".cart-product");
    expect(itemsWrapper.length).toBe(2);
    expect(itemsWrapper.is(Item)).toBe(true);
  });
});
