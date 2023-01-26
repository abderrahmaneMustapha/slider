<template>
  <transition :name="sliderTransition">
    <div
      class="slider-item"
      v-show="currentSlideIndex === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <component :is="slide"></component>
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlideIndex", "index", "direction"],
  computed: {
    sliderTransition() {
      return this.direction === "right" ? "slide-right" : "slide-left";
    },
  },
};
</script>

<style scoped>
.slider-item {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 1s ease-in-out;
}
.slide-left-enter-from {
  transform: translateX(-100%);
}
.slide-left-leave-to {
  transform: translateX(100%);
}
.slide-right-enter-from {
  transform: translateX(100%);
}
.slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
