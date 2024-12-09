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

const prefixIconClick = () => {
  console.log('prefixIconClick');
};

const suffixIconClick = () => {
  console.log('suffixIconClick');
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
      suffix-text="元"
      prefix-icon="i-icon-account"
      suffix-icon="i-icon-account"
      clearable
      :prefix-icon-silent="true"
      :suffix-icon-silent="false"
      @focus="focus"
      @blur="blur"
      @prefix-icon-click="prefixIconClick"
      @suffix-icon-click="suffixIconClick"
      @change="change"
      @keydown="keydown"
    >
      <!-- <template #suffix>
        <div class="i-icon-code" />
      </template> -->
    </IInput>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}

ul,
li {
  list-style: none;
}

.colors-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  max-width: 1080px;
  padding: 0;
  border-color: rgba(var(--i-color-background6));
  border-style: solid;
  border-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 0;
    cursor: pointer;
    background-color: var(--color);
    border-color: rgba(var(--i-color-background6));
    border-style: solid;
    border-width: 1px;
    border-top-width: 0;
    border-left-width: 0;

    p {
      margin: 8px 0;
      color: rgba(var(--i-color-font4));
      mix-blend-mode: difference;
    }

    &:hover {
      background-color: rgba(var(--i-color-background5));
    }
  }

  &.dark {
    p {
      color: bisque;
      mix-blend-mode: difference;
    }
  }
}
</style>
