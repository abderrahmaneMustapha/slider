<template>
  <button class="slider-arrow left" @click="$emit('prev')">
    <chevron-left :width="'60'" :height="'60'" :color="'#a5a3a3'" />
  </button>
  <button class="slider-arrow right" @click="$emit('next')">
    <chevron-right :width="'60'" :height="'60'" :color="'#a5a3a3'" />
  </button>
</template>

<script>
import ChevronLeft from "../icons/ChevronLeft.vue";
import ChevronRight from "../icons/ChevronRight.vue";

export default {
  components: { ChevronLeft, ChevronRight },
  emits: ["prev", "next"], // vue v3
};
</script>
<style>
.slider-arrow {
  background-color: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  top: 40%;
  bottom: 10%;
  height: 100px;
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}

@media (max-width: 767px) {
  .slider-arrow {
    display: none;
  }
}
</style>
