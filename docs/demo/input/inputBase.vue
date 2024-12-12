<script setup lang="ts">
import {
  IInput,
} from '@i-element/ui';
import { ref } from 'vue';

const value = ref('hello');
const focus = () => {
  console.log('focus');
};

const blur = () => {
  console.log('blur');
};

const change = (val: string) => {
  console.log('change', val);
};

const keydown = (e: KeyboardEvent) => {
  console.log('keydown', e);
};
</script>

<template>
  <div class="demo">
    <IInput
      v-model="value"
      placeholder="请输入"
      clearable
      @focus="focus"
      @blur="blur"
      @change="change"
      @keydown="keydown"
    />
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}
</style>
