import { shallowMount } from "@vue/test-utils";
import Loader from "../loader";
import LoadingWrapper from ".";

const factory = (props = {}, slots = {}) => {
  return shallowMount(LoadingWrapper, { propsData: props, slots });
};

describe("LoadingWrapper", () => {
  test("LoadingWrapper - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("LoadingWrapper - renders the slot", () => {
    const wrapper = factory({}, { default: "Hello" });
    expect(wrapper.text()).toBe("Hello");
  });

  test("LoadingWrapper - renders the loader on loading", () => {
    const wrapper = factory({ loading: true });
    expect(wrapper.findComponent(Loader).exists()).toBe(true);
  });
});
