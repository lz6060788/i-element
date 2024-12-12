<script setup lang="ts">
import {
  IButton,
} from '@i-element/ui';
</script>

<template>
  <div class="demo">
    <div class="btns">
      <i-button icon="plus">
        Button
      </i-button>
      <i-button
        type="primary"
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="success"
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="danger"
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="warning"
        icon="plus"
      >
        Button
      </i-button>
    </div>
    <div class="btns">
      <i-button
        disabled
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="primary"
        disabled
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="success"
        disabled
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="danger"
        disabled
        icon="plus"
      >
        Button
      </i-button>
      <i-button
        type="warning"
        disabled
        icon="plus"
      >
        Button
      </i-button>
    </div>
    <div class="btns">
      <i-button
        icon="setting"
      />
      <i-button
        type="primary"
        icon="lock-off"
      />
      <i-button
        type="success"
        icon="remove"
      />
      <i-button
        type="danger"
        icon="switch"
      />
      <i-button
        type="warning"
        icon="download"
      />
    </div>
    <div class="btns">
      <i-button
        disabled
        icon="setting"
      />
      <i-button
        type="primary"
        disabled
        icon="lock-off"
      />
      <i-button
        type="success"
        disabled
        icon="remove"
      />
      <i-button
        type="danger"
        disabled
        icon="switch"
      />
      <i-button
        type="warning"
        disabled
        icon="download"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  background-color: rgba(var(--i-color-background9) / 100%);
}

.btns {
  display: flex;
  align-items: center;

  :deep(.i-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
