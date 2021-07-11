<template>
  <section class="container">
    <h2>BUILT FOR MODERN USE</h2>
    <h1>Smarter meetings, all in one place</h1>
    <p>
      Send messages, share files, show your screen, and record your meetings -
      all in one workspace. Control who can join with invite-only team access,
      data encryption, and data export.
    </p>
  </section>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.container {
  height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 7.2rem;

  @media (max-width: 550px) {
    height: 28.4rem;
  }

  @media (max-width: 355px) {
    height: 38.4rem;
  }
}

h1 {
  max-width: 45rem;
  margin: 0 2.6rem;
  line-height: 4.4rem;
  font-size: 4rem;
  font-weight: 900;
  color: $black-text-color;

  @media (max-width: 425px) {
    font-size: 3.2rem;
  }
}

h2 {
  line-height: 2.6rem;
  margin: 0 2.6rem;
  font-size: 1.6rem;
  letter-spacing: 0.4rem;
  font-weight: 900;
  color: $blue-text-color;
}

p {
  max-width: 52rem;
  margin: 0 2.6rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: $grey-text-color;

  @media (max-width: 768px) {
    max-width: 57.3rem;
    font-size: 1.6rem;
  }
}
</style>
