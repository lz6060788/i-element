<template>
  <div
    :class="[
      ns.b()
    ]"
  >
    contents
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@i-element/shared';
// import {
//   defaultOptionsProps,
//   OptionsProps,
//   OptionsSlots,
//   OptionsEmits,
// } from './props';

// const emit = defineEmits<OptionsEmits>();
// const slots = defineSlots<OptionsSlots>();
// const props = withDefaults(
//   defineProps<OptionsProps>(),
//   defaultOptionsProps(),
// );

const ns = useNamespace('options');
</script>
