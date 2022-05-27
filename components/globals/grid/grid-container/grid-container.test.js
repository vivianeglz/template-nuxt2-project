import { shallowMount } from "@vue/test-utils";
import GridContainer from ".";

const factory = (props = {}, slots = {}) => {
  return shallowMount(GridContainer, { propsData: props, slots });
};

describe("GridContainer", () => {
  test("GridContainer - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("GridContainer - renders the slot", () => {
    const wrapper = factory({}, { default: "Hello" });
    expect(wrapper.text()).toBe("Hello");
  });

  test("GridContainer - renders the correct default props", () => {
    const wrapper = factory();
    expect(wrapper.classes()).toContain("grid");
  });

  test("GridContainer - renders the correct default template in function of props", () => {
    const wrapper = factory({ "gutter-l": true });
    expect(wrapper.classes()).toContain("grid--gutter-l");
  });
});
