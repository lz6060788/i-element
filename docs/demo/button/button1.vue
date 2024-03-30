<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  IButton,
  ConfigProvider,
  useTheme,
  darkThemeVars,
  themeVars,
  IElementCssVarsConfig,
} from '@i-element/ui';

const { setTheme } = useTheme();
const currentGlobalTheme = ref<'default' | 'dark'>('default');

// 全局主题切换
function switchGlobalTheme() {
  if (currentGlobalTheme.value === 'dark') {
    currentGlobalTheme.value = 'default';
    setTheme(themeVars);
  } else {
    currentGlobalTheme.value = 'dark';
    setTheme(darkThemeVars);
  }
}

const currentSecondLineTheme = ref<'default' | 'dark'>('default');
const secondLineThemeVars: IElementCssVarsConfig = reactive({});
// 局部主题切换
function switchSecondLineTheme() {
  if (currentSecondLineTheme.value === 'dark') {
    currentSecondLineTheme.value = 'default';
    Object.assign(secondLineThemeVars, themeVars);
  } else {
    currentSecondLineTheme.value = 'dark';
    Object.assign(secondLineThemeVars, darkThemeVars);
  }
}
</script>

<template>
  <div class="demo">
    <div class="btns">
      <i-button>Button</i-button>
      <i-button type="primary">
        Button
      </i-button>
      <i-button type="success">
        Button
      </i-button>
      <i-button type="danger">
        Button
      </i-button>
      <i-button type="warning">
        Button
      </i-button>
    </div>
    <ConfigProvider
      class="btns"
      :theme-vars="secondLineThemeVars"
    >
      <i-button>
        Button
      </i-button>
      <i-button type="primary">
        Button
      </i-button>
      <i-button type="success">
        Button
      </i-button>
      <i-button type="danger">
        Button
      </i-button>
      <i-button type="warning">
        Button
      </i-button>
    </ConfigProvider>
    <div class="btns">
      <i-button disabled>
        Button
      </i-button>
      <i-button
        type="primary"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="success"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="danger"
        disabled
      >
        Button
      </i-button>
      <i-button
        type="warning"
        disabled
      >
        Button
      </i-button>
    </div>
    <div class="btns">
      <i-button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </i-button>
      <i-button @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </i-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo {
  background-color: rgba(var(--i-color-background9) / 100%);
}

.btns {
  :deep(.i-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
