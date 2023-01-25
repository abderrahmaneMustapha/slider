<template>
  <div class="card">
    <div class="card-header">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nibh
      risus. Quisque tristique tincidunt consequat. In sed finibus massa.
      Vivamus libero sapien, hendrerit eget convallis."
    </div>
    <div class="card-content">
      <div class="image-container">
        <img :src="image" />
      </div>
      <div class="name">{{ name }}</div>
      <div class="bio">{{ bio }}</div>
    </div>
    <div class="card-footer">
      <button>View Cv Sample</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "bio", "image"],
};
</script>
<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.card-header {
  width: 70vw;
  max-width: 100%;
  margin-inline: auto;
  margin-bottom: 2em;
}
.card-content {
  margin-bottom: 3em;
}
.image-container {
  width: 10em;
  height: 10em;
  margin-inline: auto;
  margin-bottom: 3em;
}
.image-container img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 50%;
}
.card-content .name {
  font-weight: bold;
}
.card-footer button {
  background-color: #0e0ef4;
  border: none;
  color: #fff;
  padding: 1em;
  border-radius: 8px;
  box-shadow: none;
}

.card-footer button:hover {
  background-color: #2e2eff;
  cursor: pointer;
}
</style>
