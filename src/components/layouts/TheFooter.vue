<template>
  <div class="container">
    <img :src="backgroundImage" alt="background image" />
    <section class="overlay">
      <div class="wrapper">
        <h1>Experience more together</h1>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <base-button color="purple">Download <span>v1.3</span></base-button>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundImage from '../../assets/images/image-footer.jpg';
export default {
  setup() {
    return {
      backgroundImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 30.8rem;
  width: 100%;

  @media (max-width: 1050px) {
    height: 42.8rem;
  }
}

img {
  position: absolute;
  z-index: 10;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.overlay {
  position: absolute;
  z-index: 20;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, $overlay-color, $overlay-color);
}

.wrapper {
  margin: 4rem;
  width: 111rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1050px) {
    width: 57.3rem;
    height: 70%;
    text-align: center;
    flex-direction: column;
  }
}

h1 {
  max-width: 35rem;
  color: white;
  font-size: 4rem;
  font-weight: 900;
  line-height: 4.4rem;

  @media (max-width: 500px) {
    font-size: 3.2rem;
  }
}

p {
  width: 35rem;
  color: white;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.6rem;

  @media (max-width: 1050px) {
    width: 100%;
  }
}

span {
  color: $button-2-text-color;
}
</style>
