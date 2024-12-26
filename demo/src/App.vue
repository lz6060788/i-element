<script setup lang="ts">
import {
  IPopper,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <i-popper
      content="test"
      arrow
    >
      <span>123123</span>
    </i-popper>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
