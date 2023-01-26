<template>
  <div class="slider-container">
    <div class="slider-content">
      <slider-content
        v-for="(slide, index) in this.slides"
        :slide="slide"
        :key="`${name}-item-${index}`"
        :current-slide-index="currentSlide"
        :index="index"
        :direction="direction"
        @mouseenter="stopSlideTimer"
        @mouseout="startSlideTimer"
      >
      </slider-content>
      <slider-arrows v-if="arrows" @prev="prev" @next="next"></slider-arrows>
      <slider-dots
        v-if="dots"
        :total="this.slides.length"
        :current-index="currentSlide"
        @switch="switchSlide($event)"
      ></slider-dots>
    </div>
  </div>
</template>

<script>
import SliderContent from "./SliderContent.vue";
import SliderArrows from "./SliderArrows.vue";
import SliderDots from "./SliderDots.vue";
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    dots: {
      type: Boolean,
      default: false,
    },
    arrows: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 3000,
    },
  },
  components: { SliderContent, SliderArrows, SliderDots },
  data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    slides: [],
  }),
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
    assignToParentHight() {
      const parentHeight = this.$el.parentElement.offsetHeight;
      this.$el.getElementsByClassName("slider-content")[0].style.height = `${
        parentHeight - 25
      }px`;
    },
  },
  mounted() {
    this.startSlideTimer();
    this.assignToParentHight();
    this.slides = this.$slots.default ? this.$slots?.default?.() : [];
    addEventListener("resize", () => {
      this.assignToParentHight();
    });
  },
  beforeUnmount() {
    this.stopSlideTimer();
    removeEventListener("resize", () => {
      this.assignToParentHight();
    });
  },
};
</script>

<style>
.slider-container {
  display: flex;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
}
.slider-content {
  position: relative;
  overflow: hidden;
  width: 100%;
}
</style>
