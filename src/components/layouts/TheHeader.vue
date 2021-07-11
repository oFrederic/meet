<template>
  <div class="container">
    <img :src="logo" alt="my-logo" />
  </div>
</template>

<script>
import logo from '../../assets/logo.svg';
export default {
  setup() {
    return {
      logo,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 17rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
