import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Item from "../Item.vue";
import { toVND } from "@/helpers/helper";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper, actions, store, product;

beforeEach(() => {
  product = {
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
    quantity: 2,
  };

  actions = {
    setItemQuantity: jest.fn(),
    removeFromCart: jest.fn(),
  };
  store = new Vuex.Store({ actions });

  wrapper = mount(Item, {
    store,
    localVue,
    propsData: {
      product: product,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("components/screes/Cart/Item.vue", () => {
  test("Mounted And Dispaly", () => {
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.find(".cart-product__name span").text()).toBe(product.name);
    expect(wrapper.find(".cart-product__price-real").text()).toBe(
      toVND(product.price)
    );
  });

  test("Increase Quantity", () => {
    wrapper.find(".cart-product__increase-quantity").trigger("click");
    expect(actions.setItemQuantity).toBeCalledTimes(1);
  });

  describe("Decrease Quantity", () => {
    test("If Current Quantity greater than 1 => Decrease Quantity", () => {
      wrapper.find(".cart-product__decrease-quantity").trigger("click");
      expect(actions.setItemQuantity).toBeCalledTimes(1);
    });
    test("If Current Quantity equals 1 => Remove Item From Cart", () => {
      window.confirm = jest.fn(() => true);
      product.quantity = 1;
      wrapper.find(".cart-product__decrease-quantity").trigger("click");
      expect(actions.setItemQuantity).toBeCalledTimes(0);
      expect(actions.removeFromCart).toBeCalledTimes(1);
    });
  });

  describe("Remove Item From Cart", () => {
    test("User Agree", () => {
      window.confirm = jest.fn(() => true);
      wrapper.find(".cart-product__remove").trigger("click");
      expect(actions.removeFromCart).toBeCalledTimes(1);
    });
    test("User Degree", () => {
      window.confirm = jest.fn(() => false);
      wrapper.find(".cart-product__remove").trigger("click");
      expect(actions.removeFromCart).toBeCalledTimes(0);
    });
  });

  test("Change Product Quantity", async () => {
    expect(wrapper.find(".cart-product__quantity").element.value).toBe(
      product.quantity.toString()
    );
    const productChangedQuantity = { ...product, quantity: 3 };
    await wrapper.setProps({
      product: productChangedQuantity,
    });
    expect(wrapper.vm.product.quantity).toBe(3);
    expect(wrapper.find(".cart-product__quantity").element.value).toBe("3");
  });
});
