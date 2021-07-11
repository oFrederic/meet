<template>
  <button :class="styles">
    <slot />
  </button>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
  props: {
    color: {
      type: String,
      default: 'blue',
    },
  },
  setup(props) {
    const styles = computed(() =>
      props.color === 'purple' ? 'purple' : 'blue'
    );

    return {
      styles,
    };
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 5.8rem;
  padding: 0 4rem;
  border-radius: 3rem;
  border-style: none;
  color: white;
  font-weight: 900;
  font-size: 1.6rem;
  cursor: pointer;
}

.blue {
  background-color: $button-1-default-color;
}

.blue:hover {
  background-color: $button-1-hover-color;
}

.purple {
  background-color: $button-2-default-color;
}

.purple:hover {
  background-color: $button-2-hover-color;
}
</style>
