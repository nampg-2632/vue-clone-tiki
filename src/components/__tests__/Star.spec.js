import { mount } from "@vue/test-utils";
import Star from "../Star.vue";

describe("components/Star.vue", () => {
  test("Mounted", () => {
    const wrapper = mount(Star, {
      propsData: {
        light: true,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  test("Star Light", () => {
    const wrapper = mount(Star, {
      propsData: {
        light: true,
      },
    });
    expect(wrapper.find(".star").classes("star--yellow")).toBe(true);
  });

  test("Star Grey", () => {
    const wrapper = mount(Star, {
      propsData: {
        light: false,
      },
    });
    expect(wrapper.find(".star").classes("star--yellow")).toBe(false);
  });
});
