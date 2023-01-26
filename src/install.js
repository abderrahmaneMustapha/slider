import SliderMain from "./components/slider/SliderMain.vue";
import SliderContent from "./components/slider/SliderContent.vue";
import SliderArrows from "./components/slider/SliderArrows.vue";
import SliderDots from "./components/slider/SliderDots.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("slider-content", SliderContent);
  Vue.component("slider-arrows", SliderArrows);
  Vue.component("slider-dots", SliderDots);
  Vue.component("vue-abd-slider", SliderMain);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

SliderMain.install = install;

export default SliderMain;
