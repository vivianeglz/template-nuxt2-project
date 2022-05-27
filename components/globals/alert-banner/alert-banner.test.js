import { shallowMount } from "@vue/test-utils";
import AlertBanner from ".";

const factory = (props = {}, slots = {}) => {
  return shallowMount(AlertBanner, { propsData: props, slots });
};

describe("AlertBanner", () => {
  test("AlertBanner - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("AlertBanner - renders the slot", () => {
    const wrapper = factory({}, { default: "Hello" });
    expect(wrapper.text()).toBe("Hello");
  });

  test("AlertBanner - renders the correct default props", () => {
    const wrapper = factory();
    expect(wrapper.classes()).toContain("alert-banner");
  });

  test("AlertBanner - renders the correct default template in function of props", () => {
    const wrapper = factory({ type: "success" });
    expect(wrapper.classes()).toContain("alert-banner--success");
  });
});
