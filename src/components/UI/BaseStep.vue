<template>
  <div class="line"></div>
  <div class="circle">{{ number }}</div>
</template>

<script>
export default {
  props: {
    number: {
      type: String,
      default: '00',
    },
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.circle {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: $grey-text-color;
  font-size: 1.6rem;
  font-weight: 900;
  width: 5.6rem;
  height: 5.6rem;
  border: 1px solid rgba(135, 135, 157, 0.25);
  border-radius: 2.9rem;
  background-color: $main-background-color;
}
.line {
  margin: 0 auto;
  width: 0.1rem;
  height: 8.4rem;
  background: rgba(135, 135, 157, 0.25);
}
</style>
