<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  Button,
  Input,
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
  console.log(currentGlobalTheme.value);
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
  <div>
    <div class="btns">
      <Button>Button</Button>
      <Button type="primary">
        Button
      </Button>
      <Button type="success">
        Button
      </Button>
      <Button type="danger">
        Button
      </Button>
      <Button type="warning">
        Button
      </Button>
      <Button>
        Button
      </Button>
    </div>
    <ConfigProvider
      class="btns"
      :theme-vars="secondLineThemeVars"
    >
      <Button plain>
        Button
      </Button>
      <Button
        type="primary"
        plain
      >
        Button
      </Button>
      <Button
        type="success"
        plain
      >
        Button
      </Button>
      <Button
        type="danger"
        plain
      >
        Button
      </Button>
      <Button
        type="warning"
        plain
      >
        Button
      </Button>
      <Button
        plain
      >
        Button
      </Button>
    </ConfigProvider>
    <div class="btns">
      <Button disabled>
        Button
      </Button>
      <Button
        type="primary"
        disabled
      >
        Button
      </Button>
      <Button
        type="success"
        disabled
      >
        Button
      </Button>
      <Button
        type="danger"
        disabled
      >
        Button
      </Button>
      <Button
        type="warning"
        disabled
      >
        Button
      </Button>
      <Button
        disabled
      >
        Button
      </Button>
    </div>
    <div class="btns">
      <Button @click="switchGlobalTheme">
        切换全局主题，当前：{{ currentGlobalTheme }}
      </Button>
      <Button @click="switchSecondLineTheme">
        切换第二行主题，当前：{{ currentSecondLineTheme }}
      </Button>
    </div>
    <Input />
  </div>
</template>

<style lang="scss" scoped>
.btns {
  :deep(.i-button) {
    margin-bottom: 10px;

    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
