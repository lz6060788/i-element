<template>
  <component
    :is="props.tag"
    v-bind="_props"
    ref="_ref"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('disabled', _disabled),
      ns.is('loading', loading),
    ]"
    @click="handleClick"
  >
    <span
      v-if="_prefixIcon"
      :class="[_prefixIcon, ns.b('prefix-icon'),]"
    />
    <slot />
    <span
      v-if="_suffixIcon"
      :class="[_suffixIcon, ns.b('suffix-icon'),]"
    />
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useNamespace } from '@i-element/shared';
import {
  defaultTextProps,
  TextProps,
  TextSlots,
  TextEmits,
} from './props';

const props = withDefaults(
  defineProps<TextProps>(),
  defaultTextProps(),
);
const emit = defineEmits<TextEmits>();

defineSlots<TextSlots>();

const ns = useNamespace('text');

const _ref = ref<HTMLButtonElement>();
const _size = computed(() => props.size);
const _type = computed(() => props.type);
const _disabled = computed(() => props.disabled);
const _prefixIcon = computed(() => props.prefixIcon);
const _suffixIcon = computed(() => props.suffixIcon);
const _props = computed(() => {
  if (props.tag === 'a') {
    return {
      ariaDisabled: _disabled.value || props.loading,
      disabled: _disabled.value || props.loading,
      href: props.href,
      target: props.target,
    };
  }
  return {};
});

const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
};
</script>
