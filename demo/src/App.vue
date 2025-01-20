<script setup lang="ts">
import {
  IOption,
} from '@i-element/ui';
import { ref } from 'vue';

const data = ref({
  value: '选项1',
  // width: 90,
  checked: true,
  children: [
    {
      value: '选项1-1',
      minwidth: 120,
      tooltip: '这是一段描述',
    },
    { value: '选项1-2', minwidth: 120 },
    { value: '选项1-3', minwidth: 120 },
    {
      value: '选项1-4',
      minwidth: 120,
      checked: true,
      children: [
        { value: '选项1-4-1' },
        { value: '选项1-4-2', tooltip: '这是一段描述' },
        { value: '选项1-4-3', checked: true },
      ],
    },
  ],
});
</script>

<template>
  <div class="container">
    <i-option
      :show-checked-icon="false"
      v-bind="data"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  width: 100px;
  padding: 24px;
}
</style>
