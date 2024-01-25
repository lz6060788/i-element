<script setup lang="ts">
// packages/button/src/button.vue
import { computed } from 'vue';
import { defaultButtonProps, ButtonProps } from './button';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

const classes = computed(() => {
  const result: string[] = [];
  if (props.type) {
    result.push(`i-button--${props.type}`);
  }

  if (props.plain) {
    result.push('i-button--plain');
  }

  if (props.disabled) {
    result.push('i-button--disabled');
  }

  return result;
});

</script>

<template>
  <button
    class="i-button"
    :class="classes"
  >
    <slot />
  </button>
</template>
