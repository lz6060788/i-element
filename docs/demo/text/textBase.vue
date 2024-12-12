<script setup lang="ts">
import {
  IText,
} from '@i-element/ui';

function handleClick(val: string) {
  alert(val);
}
</script>

<template>
  <div class="demo">
    <IText
      @click="handleClick('default')"
    >
      普通
    </IText>
    <IText
      type="primary"
      @click="handleClick('blue')"
    >
      蓝色
    </IText>
    <IText
      type="warning"
      @click="handleClick('orange')"
    >
      橙色
    </IText>
    <IText
      type="danger"
      @click="handleClick('red')"
    >
      红色
    </IText>
    <IText
      type="success"
      @click="handleClick('green')"
    >
      绿色
    </IText>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  display: flex;
  gap: 8px;
}
</style>
