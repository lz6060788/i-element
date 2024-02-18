<script setup lang="ts">
// packages/config-provider/src/config-provider.vue
import { computed } from 'vue';
import { generateCssVars, themeColorLevelsEnabledKeys } from '@i-element/styles';
import { ConfigProviderProps, defaultConfigProviderProps } from './config-provider';

const props = withDefaults(
  defineProps<ConfigProviderProps>(),
  defaultConfigProviderProps(),
);

const cssVars = computed(() => generateCssVars(props.themeVars, {
  colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
  colorLevels: 9,
}));

</script>

<template>
  <component
    :is="tag"
    :style="cssVars"
  >
    <slot />
  </component>
</template>
