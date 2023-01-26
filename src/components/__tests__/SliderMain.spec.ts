import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { shallowMount, mount, VueWrapper } from "@vue/test-utils";

import SliderMain from "../slider/SliderMain.vue";
import SliderContent from "../slider/SliderContent.vue";
import SliderArrows from "../slider/SliderArrows.vue";
import SliderDots from "../slider/SliderDots.vue";

describe("renders properly with no content", () => {
  //let wrapper: VueWrapper<any>;

  it("have the correct elements", () => {
    const wrapper = shallowMount(SliderMain, {
      props: { name: "slidertest", arrows: true, dots: true },
    });
    expect(wrapper.vm.name).toMatch("slidertest");
    expect(wrapper.vm.arrows).toEqual(true);
    expect(wrapper.vm.dots).toEqual(true);
    expect(wrapper.findComponent(SliderArrows).exists()).toEqual(true);
    expect(wrapper.findComponent(SliderContent).exists()).toEqual(false);
    expect(wrapper.findComponent(SliderDots).exists()).toEqual(true);
  });

  it("arrows and dots does not exist when not assigned to true in the props", () => {
    const wrapper = shallowMount(SliderMain, {
      props: { name: "slidertest1" },
    });
    expect(wrapper.vm.name).toMatch("slidertest1");
    expect(wrapper.vm.arrows).toEqual(false);
    expect(wrapper.vm.dots).toEqual(false);
    expect(wrapper.findComponent(SliderArrows).exists()).toEqual(false);
    expect(wrapper.findComponent(SliderDots).exists()).toEqual(false);
  });
});

describe("renders properly with content", () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = mount(SliderMain, {
      props: { name: "slidertest", arrows: true, dots: true, interval: 5000 },
      slots: {
        default: [
          '<div class="slide-test">One</div>',
          '<div class="slide-test">Two</div>',
          '<div class="slide-test">Three</div>',
        ],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("should render slots ", () => {
    expect(wrapper.findAll(".slide-test").length).toEqual(3);
    expect(wrapper.vm.slides.length).toEqual(3);
    expect(wrapper.vm.currentSlide).toEqual(0);
  });

  it("should switch between slides", () => {
    wrapper.vm.setCurrentSlide(2);
    expect(wrapper.vm.currentSlide).toEqual(2);
    wrapper.vm.prev();
    expect(wrapper.vm.currentSlide).toEqual(1);
    wrapper.vm.prev();
    expect(wrapper.vm.currentSlide).toEqual(0);
    wrapper.vm.prev();
    expect(wrapper.vm.currentSlide).toEqual(2);
    wrapper.vm.next();
    expect(wrapper.vm.currentSlide).toEqual(0);
    wrapper.vm.next();
    expect(wrapper.vm.currentSlide).toEqual(1);
  });

  it("should go to the next slide automatically when time elapsed after mounted is equal to the interval", () => {
    wrapper.setProps({ interval: 1000 });
    const timeout = setTimeout(() => {
      expect(wrapper.vm.currentSlide).toEqual(1);
    }, 1200);
    clearTimeout(timeout);
  });

  it("should switch step on when prev, next, switch events emitted", () => {
    wrapper.find(".left").trigger("click");
    expect(wrapper.vm.currentSlide).toEqual(2);
    wrapper.find(".right").trigger("click");
    expect(wrapper.vm.currentSlide).toEqual(0);
    wrapper.find(".right").trigger("click");
    expect(wrapper.vm.currentSlide).toEqual(1);
    wrapper.findAll(".slider-dots-content").at(0)?.trigger("click");
    expect(wrapper.vm.currentSlide).toEqual(0);
  });
});
