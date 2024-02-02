<script setup lang="ts">
import { ref } from 'vue';
import { hello } from '@i-element/shared';
import {
  defaultInputProps,
  InputEmits,
  InputProps,
  InputExpose,
} from './props';

// interface TypeA {
//   explain: boolean
// };

const props = withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('update:modelValue', value);
  hello(`${value}`);
}

function clear() {
  emit('update:modelValue', '');
}

const a = ref(0);

defineExpose<InputExpose>({
  clear,
  a,
});

</script>

<template>
  <input
    class="openx-input"
    :value="modelValue"
    v-bind="props"
    @input="inputHandler"
  >
</template>
