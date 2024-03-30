<template>
  <input
    class="openx-input"
    :value="modelValue"
    v-bind="props"
    @input="inputHandler"
  >
</template>

<script setup lang="ts">
import {
  defaultInputProps,
  InputEmits,
  InputProps,
  InputExpose,
} from './props';

const props = withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

function inputHandler(e: any) {
  const { value } = e.target;
  emit('input', value);
}

function clear() {
  emit('update:modelValue', '');
}

defineExpose<InputExpose>({
  clear,
});

</script>
