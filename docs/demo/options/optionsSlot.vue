<script setup lang="ts">
import {
  IOptions,
  IOption,
} from '@i-element/ui';
import { ref } from 'vue';

const value = ref([]);
const data = ref(
  [
    {
      value: '选项1',
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
          children: [
            { value: '选项1-4-1' },
            { value: '选项1-4-2', tooltip: '这是一段描述' },
            { value: '选项1-4-3' },
          ],
        },
      ],
    },
    {
      value: '选项2',
      children: [
        {
          value: '选项2-1',
          minwidth: 120,
          tooltip: '这是一段描述',
        },
        { value: '选项2-2', minwidth: 120 },
        { value: '选项2-3', minwidth: 120 },
        {
          value: '选项2-4',
          minwidth: 120,
          children: [
            { value: '选项2-4-1' },
            { value: '选项2-4-2', tooltip: '这是一段描述11' },
            { value: '选项2-4-3' },
          ],
        },
      ],
    },
  ],
);
</script>

<template>
  <div class="container">
    <p>
      <span>已选择：</span>
      <span>{{ value }}</span>
    </p>
    <div class="options">
      <i-options
        v-model="value"
        :options="data"
        multiple
        :show-check-box="false"
        :close-after-click="false"
      >
        <i-option
          v-for="(item, index) in data"
          :key="item.value.toString()"
          v-bind="item"
        >
          选项slot{{ index }}
        </i-option>
      </i-options>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  padding: 24px;

  .options {
    width: 200px;
    margin-top: 16px;
  }
}
</style>
