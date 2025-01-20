<script setup lang="ts">
import {
  IOption,
} from '@i-element/ui';

</script>

<template>
  <div class="container">
    <i-option
      value="value"
      :show-checked-icon="false"
      label="option1"
      tooltip="这是一段提示文字"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 200px;
  padding: 24px;
}
</style>
