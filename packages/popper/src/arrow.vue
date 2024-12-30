<template>
  <div
    data-popper-arrow
    :class="[
      ns.b('inner-arrow')
    ]"
  />
</template>

<script lang="ts" setup>
import {
  useNamespace,
} from '@i-element/shared';

const ns = useNamespace('popper');
</script>
