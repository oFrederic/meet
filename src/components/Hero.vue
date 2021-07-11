<template>
  <section class="container">
    <div role="img" title="multiple profiles pictures" class="hero-left">
      <img :src="heroLeft" alt="multiple profiles pictures" />
    </div>
    <div role="article" class="content-large">
      <h1>
        Group Chat<br />
        for Everyone
      </h1>
      <p>
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device
      </p>
      <div class="actions">
        <base-button class="button-left"
          >Download <span>v1.3</span></base-button
        >
        <base-button color="purple">What is it?</base-button>
      </div>
    </div>
    <div role="img" title="multiple profiles pictures" class="hero-right">
      <img :src="heroRight" alt="multiple profiles pictures" />
    </div>
  </section>
  <div role="article" class="content-default">
    <h1>
      Group Chat<br />
      for Everyone
    </h1>
    <p>
      Meet makes it easy to connect with others face-to-face virtually and
      collaborate across any device
    </p>
    <div class="actions">
      <base-button class="button-left">Download <span>v3.14</span></base-button>
      <base-button color="purple">What is it?</base-button>
    </div>
  </div>
</template>

<script>
import heroLeft from '../assets/images/image-hero-left.png';
import heroRight from '../assets/images/image-hero-right.png';
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
  setup() {
    return {
      heroLeft,
      heroRight,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 144rem;
  margin: 0 auto 10rem auto;
  overflow: visible;
  height: 35.8rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;

  @media (max-width: 1530px) {
    overflow: hidden;
  }

  @media (max-width: 1350px) {
    height: 100%;
    margin-bottom: 8rem;
    justify-content: center;
    align-items: center;
  }
}

img {
  width: 100%;
  object-fit: cover;
}

h1 {
  color: $black-text-color;
  font-size: 6.4rem;
  line-height: 6.4rem;

  @media (max-width: 768px) {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }

  @media (max-width: 450px) {
    font-size: 4rem;
    line-height: 4.4rem;
  }
}

p {
  color: $grey-text-color;
  font-size: 1.8rem;
  line-height: 2.6rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  @media (max-width: 450px) {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }
}

span {
  color: $button-1-text-color;
}

.content-large {
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 5.5rem;

  @media (max-width: 1350px) {
    display: none;
  }
}

.content-default {
  margin: 7.2rem auto;
  max-width: 45.7rem;
  height: 30.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (min-width: 1351px) {
    display: none;
  }

  @media (max-width: 768px) {
    height: 26.2rem;
  }

  @media (max-width: 450px) {
    max-width: 33.7rem;
    padding: 0 1rem;
    height: 35rem;
  }
}

.hero-left {
  margin-left: -3.6rem;
  align-self: flex-start;

  @media (max-width: 1440px) {
    margin-left: -3.6rem;
  }

  @media (max-width: 1350px) {
    align-self: flex-start;
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-right: 2%;
  }
}

.hero-right {
  margin-right: -3.6rem;
  align-self: flex-end;

  @media (max-width: 1350px) {
    align-self: flex-start;
    margin-left: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-left: 2%;
  }
}

.actions {
  display: flex;

  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
  }
}

.button-left {
  margin-right: 2rem;

  @media (max-width: 450px) {
    margin-top: 0;
    margin-bottom: 2rem;
    margin-right: 0;
  }
}
</style>
