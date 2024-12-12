<script setup lang="ts">
import {
  IInput,
} from '@i-element/ui';
import { ref } from 'vue';

const value1 = ref('value1');
const value2 = ref('value2');
const value3 = ref('value3');
const prefixIconClick = () => {
  alert('prefixIconClick');
};

const suffixIconClick = () => {
  alert('suffixIconClick');
};
</script>

<template>
  <div class="demo">
    <div class="input-container">
      <IInput
        v-model="value1"
        placeholder="请输入"
        prefix-icon="i-icon-account"
        suffix-icon="i-icon-account"
        clearable
      />
    </div>
    <div class="input-container">
      <IInput
        v-model="value2"
        placeholder="请输入"
        prefix-icon="i-icon-account"
        suffix-icon="i-icon-account"
        clearable
        :prefix-icon-silent="false"
        :suffix-icon-silent="false"
        @prefix-icon-click="prefixIconClick"
        @suffix-icon-click="suffixIconClick"
      />
    </div>
    <div class="input-container">
      <IInput
        v-model="value3"
        placeholder="请输入"
        prefix-icon="i-icon-account"
        suffix-icon="i-icon-account"
        clearable
      >
        <template #suffix>
          <div class="i-icon-code" />
        </template>
      </IInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-container {
  margin-bottom: 16px;
}
</style>
