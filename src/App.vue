<template>
  <div class="example">
    <slider-main :name="'slider-2'" :interval="3000" arrows dots>

    </slider-main>
  </div>
  <div class="example">
    <slider-main :name="'slider-1'" :interval="3000" arrows dots>
      <img
        src="https://via.placeholder.com/900/0000FF/808080 ?Text=Digital.com"
      />
      <img
        src="https://via.placeholder.com/900/103320/808080 ?Text=Digital.com"
      />
      <img
        src="https://via.placeholder.com/900/10F00F/808080 ?Text=Digital.com"
      />
      <img
        src="https://via.placeholder.com/700/010020/808080 ?Text=Digital.com"
      />
    </slider-main>
  </div>
</template>

<script>
import SliderMain from "./components/slider/SliderMain.vue";
export default {
  name: "App",
  components: { SliderMain },
};
</script>

<style>
.example {
  height: 60%;
}
.example .text-example {
  text-align: center;
  font-weight: 700;
  padding-top: 10%;
}
img {
  min-width: 100%;
}
</style>
