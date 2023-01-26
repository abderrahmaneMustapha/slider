<template>
  <div id="home">
    <nav>Slider Example Nav</nav>
    <header>
      <slider-main :interval="2500" :name="'header-slider'" dots>
        <img
          src="https://via.placeholder.com/900/0000FF/808080?Text=Digital.com"
        />
        <img
          src="https://via.placeholder.com/900/103320/808080?Text=Digital.com"
        />
        <img
          src="https://via.placeholder.com/900/10F00F/808080?Text=Digital.com"
        />
        <img
          src="https://via.placeholder.com/900/010020/808080?Text=Digital.com"
        />
      </slider-main>
    </header>
    <section class="section-one">
      <div class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nibh
        risus. Quisque tristique tincidunt consequat. In sed finibus massa.
        Vivamus libero sapien, hendrerit eget convallis a, hendrerit sed libero.
        Vivamus a vehicula sem. Vestibulum elit nisl, ornare vel efficitur at,
        aliquet tempus enim. Praesent posuere tempus sapien, placerat feugiat
        arcu accumsan in. Vivamus malesuada rhoncus nisi, ut posuere diam
        malesuada at. Maecenas tempus lacus eu porta lobortis. Etiam
        sollicitudin eget lorem et sollicitudin. Ut dapibus suscipit purus ac
        imperdiet
      </div>
      <div class="slide">
        <slider-main :interval="2500" :name="'section-slider'">
          <img
            src="https://via.placeholder.com/900/0000FF/808080?Text=Digital.com"
          />
          <img
            src="https://via.placeholder.com/900/103320/808080?Text=Digital.com"
          />
          <img
            src="https://via.placeholder.com/900/10F00F/808080?Text=Digital.com"
          />
          <img
            src="https://via.placeholder.com/900/010020/808080?Text=Digital.com"
          />
        </slider-main>
      </div>
    </section>
    <section class="section-two">
      <slider-main :interval="2500" :name="'section-card'" dots arrows>
        <card-home
          :key="'katrina-kenny'"
          :image="'https://via.placeholder.com/200/010020/808080?Text=Digital.com'"
          :name="'Katrina Kenny'"
          :bio="'Sector Specialist at Ministry of Education'"
        ></card-home>
        <card-home
          :key="'jhon-doe'"
          :image="'https://via.placeholder.com/200/0000FF/808080?Text=Digital.com'"
          :name="'Jhon Doe'"
          :bio="'Software Developer at self employed'"
        ></card-home>
        <card-home
          :key="'jane-doe'"
          :image="'https://via.placeholder.com/200/10F00F/808080?Text=Digital.com'"
          :name="'Jane Doe'"
          :bio="'Project Manager at self employed'"
        ></card-home>
      </slider-main>
    </section>
    <footer>Slider Exampe Footer</footer>
  </div>
</template>

<script>
import SliderMain from "vue-abd-slider";
import "vue-abd-slider/dist/vue-abd-slider.css"
import CardHome from "./CardHome.vue";

export default {
  name: "HomeMain",
  components: { SliderMain, CardHome },
};
</script>

<style scoped>

#home {
  display: grid;
  grid-template-rows: 1fr 7fr 6fr 10fr 2fr;
}
nav,
footer {
  background-color: bisque;
  padding: 1em;
  text-align: center;
  font-weight: bold;
}
header img {
  min-width: 100%;
}
.section-one {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.section-one .text {
  width: 70%;
}
.section-one .slide {
  width: 30%;
}

.section-one .text {
  font-weight: 500;
  padding: 2em;
}

@media (max-width: 767px) {
  #home {
    grid-template-rows: 1fr 7fr 6fr 10fr 2fr;
  }
  .section-one .text {
    width: 100%;
  }
  .section-one .slide {
    display: none;
  }
}
</style>
