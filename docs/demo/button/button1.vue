<script setup lang="ts">
import {
  IButton,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <div class="btns">
      <i-button>Button</i-button>
      <i-button type="primary">
        Button
      </i-button>
      <i-button type="success">
        Button
      </i-button>
      <i-button type="danger">
        Button
      </i-button>
      <i-button type="warning">
        Button
      </i-button>
    </div>
    <div class="btns">
      <i-button disabled>
        Button
      </i-button>
      <i-button
        type="primary"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="success"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="danger"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="warning"
        disabled
      >
        Button
      </i-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  background-color: rgba(var(--i-color-background9) / 100%);
}

.btns {
  :deep(.i-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
