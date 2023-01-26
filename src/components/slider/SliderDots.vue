<template>
  <div class="slider-dots-container">
    <button
      class="slider-dots-content"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style>
.slider-dots-container {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}
.slider-dots-content {
  width: 15px;
  height: 15px;
  border: none;
  background: #100f0f;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>
