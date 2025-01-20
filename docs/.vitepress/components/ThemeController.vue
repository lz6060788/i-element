<template>
  <span />
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useData } from 'vitepress';
import {
  useTheme,
  darkThemeVars,
  themeVars,
} from '@i-element/ui';

const data = useData();
const { setTheme } = useTheme();

watch(data.isDark, (isDark: boolean) => {
  // TODO 抽离到外层处理
  if (isDark) {
    setTheme(darkThemeVars);
  } else {
    setTheme(themeVars);
  }
});
</script>

<style>
.vp-doc ul,
.vp-doc ol {
  padding-left: 0;
  margin: 0;
}
</style>
