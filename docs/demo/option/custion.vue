<script setup lang="ts">
import {
  IOption,
} from '@i-element/ui';
import { ref } from 'vue';

// const data = ref({
//   value: '测试中...',
// });
const isChecked = ref(true);
function switchCheck(value: unknown) {
  console.log(value);
  isChecked.value = !isChecked.value;
}
</script>

<template>
  <div>
    <i-option
      value="1"
      label="禁用态"
      disabled
    />
    <i-option
      value="value"
      :label="isChecked ? '选中态' : '常规态'"
      :checked="isChecked"
      show-check-box
      @click="switchCheck"
    />
  </div>
</template>
