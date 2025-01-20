<script setup lang="ts">
import {
  IOption,
} from '@i-element/ui';
import { ref } from 'vue';

const isChecked = ref(true);
function switchCheck() {
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div>
    <i-option
      value="value"
      :label="isChecked ? '选中态' : '常规态'"
      :checked="isChecked"
      :show-checked-icon="false"
      @click="switchCheck"
    >
      <template #prefix="{ checked }">
        <span>我来组成头部{{ checked }}</span>
      </template>
      <span>选项A</span>
      <template #suffix="{ checked }">
        <span>我来组成尾部{{ checked }}</span>
      </template>
    </i-option>
  </div>
</template>
