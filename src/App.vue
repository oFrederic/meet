<template>
  <the-header />
  <main>
    <hero />
    <base-step number="01" />
    <album />
    <description />
    <div class="step-container">
      <base-step number="02" />
    </div>
  </main>
  <the-footer />
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheFooter from './components/layouts/TheFooter.vue';
import Hero from './components/Hero.vue';
import Album from './components/Album.vue';
import Description from './components/Description.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
    Hero,
    Album,
    Description,
  },
  setup() {},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
  font-size: 10px;
  font-family: 'Red Hat Display', sans-serif;
}

body {
  background-color: $main-background-color;
}

.step-container {
  position: relative;
  z-index: 30;
  margin-bottom: -2.8rem;
}
</style>
