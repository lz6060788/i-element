<script setup lang="ts">
import {
  IPopper,
  IText,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <div class="container">
      <i-popper
        arrow
        content="悬浮触发"
      >
        <i-text type="primary">
          悬浮触发
        </i-text>
      </i-popper>
      <i-popper
        arrow
        content="点击触发"
        :hover="false"
      >
        <i-text type="primary">
          点击触发
        </i-text>
      </i-popper>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;

  .container {
    display: flex;
    gap: 16px;
    justify-content: center;
    padding: 16px;
  }
}
</style>
