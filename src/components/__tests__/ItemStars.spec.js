import { mount } from "@vue/test-utils";
import ItemStars from "../ItemStars.vue";
import Star from "../Star.vue";

let wrapper;

beforeEach(() => {
  wrapper = mount(ItemStars, {
    propsData: {
      point: 4,
    },
  });
});
afterEach(() => {
  wrapper.destroy();
});

describe("components/Star.vue", () => {
  test("Mounted", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("Display Stars", () => {
    const stars = wrapper.findAll(".item-star .star");

    const star = stars.at(0);
    expect(star.is(Star)).toBe(true);

    for (let i = 0; i < 5; i++) {
      const star = stars.at(i);
      if (i === 4) {
        expect(star.classes("star--yellow")).toBe(false);
      } else {
        expect(star.classes("star--yellow")).toBe(true);
      }
    }
  });
});
