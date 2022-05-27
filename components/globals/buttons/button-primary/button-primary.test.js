import { shallowMount } from "@vue/test-utils";
import ButtonPrimary from ".";

const factory = (props = {}) => {
  return shallowMount(ButtonPrimary, { propsData: props });
};

describe("ButtonPrimary", () => {
  test("ButtonPrimary - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("ButtonPrimary - renders the correct default props", () => {
    const wrapper = factory();
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.classes()).toContain("button--s");
  });

  test("ButtonPrimary - renders the correct default template in function of props", () => {
    const wrapper = factory({ size: "m", tag: "a" });
    expect(wrapper.classes()).toContain("button--m");
    expect(wrapper.find("a").exists()).toBe(true);
  });
});
