<script setup lang="ts">
import {
  IOption,
} from '@i-element/ui';

const suffixTextStyle = 'color: orange';
const suffixIconStyle = 'color: blue';
const htmlSuffix = '<span style="color: red">我是html字符串</span>';
</script>

<template>
  <div>
    <i-option
      value="value"
      :show-checked-icon="false"
      label="option1"
      :suffix="{ raw: htmlSuffix, html: true }"
    />
  </div>
  <div>
    <i-option
      value="value"
      :show-checked-icon="false"
      label="option2"
      :suffix="{ text: '我是text文本', injectStyle: suffixTextStyle }"
    />
  </div>
  <div>
    <i-option
      value="value"
      :show-checked-icon="false"
      label="option3"
      :suffix="{ icon: 'i-icon-account', injectStyle: suffixIconStyle }"
    />
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 24px;

  .content {
    .footer {
      display: flex;
      align-items: center;
      justify-content: end;
      margin-top: 16px;
    }
  }
}
</style>
