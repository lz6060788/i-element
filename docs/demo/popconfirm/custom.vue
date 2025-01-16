<script setup lang="ts">
import {
  IPopconfirm,
  IText,
} from '@i-element/ui';

function confirm() {
  alert('confirm');
}
</script>

<template>
  <div class="demo">
    <i-popconfirm
      arrow
      placement="right-start"
      @confirm="confirm"
    >
      <template #content>
        <div class="content">
          <p />
        </div>
      </template>
      <IText type="primary">
        点我
      </IText>
    </i-popconfirm>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 24px;

  p {
    margin: 0;
  }

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
