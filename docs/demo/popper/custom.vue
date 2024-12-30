<script setup lang="ts">
import {
  IPopper,
  IText,
  IButton,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <i-popper
      arrow
      placement="right-start"
    >
      <template #content>
        <div class="content">
          <span>这是一段描述占位符</span>
          <div class="footer">
            <i-button>关闭</i-button>
          </div>
        </div>
      </template>
      <i-text type="primary">
        slot渲染
      </i-text>
    </i-popper>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  justify-content: center;
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
