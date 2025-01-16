<script setup lang="ts">
import {
  IPopconfirm,
  IText,
} from '@i-element/ui';
import { ref } from 'vue';

const loading = ref(false);
function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('end');
    }, 3000);
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function confirm(_: MouseEvent, close: () => void) {
  loading.value = true;
  await sleep();
  loading.value = false;
  close();
}
</script>

<template>
  <div class="demo">
    <i-popconfirm
      arrow
      content="等待3s"
      placement="right-start"
      :close-after-confirm="false"
      :confirm-button-props="{
        loading: loading
      }"
      @confirm="confirm"
    >
      <IText type="primary">
        点!!!
      </IText>
    </i-popconfirm>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  width: 100%;
  padding: 24px;

  :deep(p) {
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
