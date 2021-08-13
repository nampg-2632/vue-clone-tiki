import {
  mount,
  shallowMount,
  RouterLinkStub,
  createLocalVue,
} from "@vue/test-utils";
import Vuex from "vuex";
import Header from "../Header.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

let wrapper, store, getters;
let state = {
  itemsCount: 2,
};

beforeEach(() => {
  getters = {
    // itemsCount: jest.fn(),
    itemsCount: () => 2,
  };
  store = new Vuex.Store({ getters, state });
  wrapper = shallowMount(Header, {
    store,
    localVue,
    stubs: {
      RouterLink: RouterLinkStub,
    },
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe("screens/Cart.vue", () => {
  test("Cart Icon Router Link", () => {
    expect(
      wrapper
        .find(".header__cart")
        .findComponent(RouterLinkStub)
        .props().to
    ).toBe("/cart");
  });

  test("Brand Name Router Link", () => {
    expect(
      wrapper
        .find(".header__brand")
        .findComponent(RouterLinkStub)
        .props().to
    ).toBe("/");
  });

  test("Card Badge", () => {
    expect(wrapper.find(".header__cart-badge").text()).toBe("2");
  });
});
