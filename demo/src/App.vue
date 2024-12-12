<script setup lang="ts">
import {
  IText,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <IText
      type="primary"
      prefix-icon="i-icon-back"
    >
      点击返回
    </IText>
    <IText
      type="primary"
      suffix-icon="i-icon-download"
    >
      点击下载
    </IText>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
