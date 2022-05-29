import { shallowMount } from "@vue/test-utils";
import ModalInfo from ".";

const factory = (props = {}) => {
  return shallowMount(ModalInfo, { propsData: props });
};

describe("ModalInfo", () => {
  test("ModalInfo - should correctly mounted", () => {
    const wrapper = factory();
    expect(wrapper.exists()).toBe(true);
  });

  test("ModalInfo - renders the correct default props", () => {
    const wrapper = factory();
    expect(wrapper.find(".modal__container").classes()).toContain("modal__container--s");
    expect(wrapper.find("h3").text()).toBe("Title");
  });

  it("ModalInfo - renders the correct default template in function of props", () => {
    const wrapper = factory({ size: "m", title: "Test" });
    expect(wrapper.find(".modal__container").classes()).toContain("modal__container--m");
    expect(wrapper.find("h3").text()).toBe("Test");
  });
});
