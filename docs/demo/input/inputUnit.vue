<script setup lang="ts">
import {
  IInput,
} from '@i-element/ui';
import { ref } from 'vue';

const value = ref(5);
</script>

<template>
  <div class="demo">
    <IInput
      v-model="value"
      placeholder="请输入"
      clearable
      suffix-text="元"
      type="number"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}
</style>
