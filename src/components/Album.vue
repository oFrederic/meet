<template>
  <section class="wrapper">
    <div role="img" class="container">
      <img :src="image1" alt="woman in videocall" />
      <img :src="image2" alt="women video chatting" />
      <img :src="image3" alt="men in meeting" />
      <img :src="image4" alt="man texting" />
    </div>
  </section>
</template>

<script>
import image1 from '../assets/images/image-woman-in-videocall.jpg';
import image2 from '../assets/images/image-women-videochatting.jpg';
import image3 from '../assets/images/image-men-in-meeting.jpg';
import image4 from '../assets/images/image-man-texting.jpg';
export default {
  setup() {
    return {
      image1,
      image2,
      image3,
      image4,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.container {
  margin: 6.4rem 8rem 8rem;
  max-width: 111rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    gap: 1.1rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 6.4rem 2.5rem 8rem 2.5rem;
    gap: 2.5rem;
  }
}

img {
  width: 100%;
  object-fit: cover;
  border-radius: 5%;
}
</style>
