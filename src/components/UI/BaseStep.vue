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
  font-size: 16px;
  font-weight: 900;
  width: 56px;
  height: 56px;
  border: 1px solid rgba(135, 135, 157, 0.25);
  border-radius: 29px;
  background-color: $main-background-color;
}
.line {
  margin: 0 auto;
  width: 1px;
  height: 84px;
  background: rgba(135, 135, 157, 0.25);
}
</style>
