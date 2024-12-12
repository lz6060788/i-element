<script setup lang="ts">
import {
  IText,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <IText>
      默认小号字体，12px
    </IText>
    <IText
      size="medium"
    >
      中号字体，14px
    </IText>
    <IText
      size="large"
    >
      大号字体，16px
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
