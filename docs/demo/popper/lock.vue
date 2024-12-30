<script setup lang="ts">
import {
  IPopper,
  IButton,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <i-popper
      content="底部空间不足，自动调整浮层位置"
      placement="bottom"
      :locked="false"
    >
      <i-button>位置解锁</i-button>
    </i-popper>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0;
}
</style>
