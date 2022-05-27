import { shallowMount } from "@vue/test-utils";
import GridItem from ".";

const factory = (props = {}, slots = {}) => {
  return shallowMount(GridItem, { propsData: props, slots });
};

describe("GridItem", () => {
  test("GridItem - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("GridItem - renders the slot", () => {
    const wrapper = factory({}, { default: "Hello" });
    expect(wrapper.text()).toBe("Hello");
  });

  test("GridItem - renders the correct default props", () => {
    const wrapper = factory();
    expect(wrapper.classes()).toContain("grid__col");
  });

  test("GridItem - renders the correct default template in function of props", () => {
    const wrapper = factory({ s12: true });
    expect(wrapper.classes()).toContain("grid__col--s12");
  });
});
