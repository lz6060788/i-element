<script setup lang="ts">
import {
  IPopconfirm,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <i-popconfirm
      arrow
      content="悬浮触发"
      placement="right-start"
    >
      <template #content>
        <div class="content">
          <p>这是一段描述占位符1111</p>
        </div>
      </template>
      测试
    </i-popconfirm>
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
