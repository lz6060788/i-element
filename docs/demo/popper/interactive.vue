<script setup lang="ts">
import {
  IPopper,
  IButton,
  IText,
} from '@i-element/ui';
import { ref } from 'vue';

const isInteractive = ref(false);
</script>

<template>
  <div class="demo">
    <i-button @click="isInteractive = !isInteractive">
      {{ isInteractive ? '切换至不可交互' : '切换至可交互' }}
    </i-button>
    <i-popper
      arrow
      content="不可交互内容"
      :interactive="isInteractive"
    >
      <i-text type="primary">
        链接A
      </i-text>
    </i-popper>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  padding: 16px;
}
</style>
