<template>
  <svg
    :width="width"
    :height="height"
    viewBox="-0.5 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3272 2.99998L7.85661 11.9706C7.5919 12.25 7.5919 12.6912 7.85661 12.9853L16.3419 22"
      :stroke="color"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
<script>
export default {
  props: ["width", "height", "color"],
};
</script>
