<template>
  <component
    :is="tag"
    ref="_ref"
    v-bind="_props"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('disabled', _disabled),
      ns.is('loading', loading),
    ]"
    @click="handleClick"
  >
    <template v-if="icon || $slots.icon">
      <span
        v-if="icon"
        :class="[`i-icon-${icon}`, ns.e('icon')]"
      />
      <slot
        v-else
        name="icon"
        :class="[ns.e('icon')]"
      />
    </template>
    <span
      v-if="$slots.default"
      :class="[ns.e('text')]"
    >
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useNamespace } from '@i-element/shared';
import {
  defaultButtonProps,
  ButtonProps,
  ButtonSlots,
  ButtonEmits,
} from './props';

defineOptions({
  name: 'IButton',
});

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);
const emit = defineEmits<ButtonEmits>();

defineSlots<ButtonSlots>();

const ns = useNamespace('button');

const _ref = ref<HTMLButtonElement>();
const _size = computed(() => props.size);
const _type = computed(() => props.type);
const _disabled = computed(() => props.disabled);
const _props = computed(() => {
  if (props.tag === 'button') {
    return {
      ariaDisabled: _disabled.value || props.loading,
      disabled: _disabled.value || props.loading,
      type: props.nativeType,
    };
  }
  return {};
});

const handleClick = (evt: MouseEvent) => {
  emit('click', evt);
};

defineExpose(({
  _disabled,
  _size,
  _type,
  _ref,
  _props,
  handleClick,
}));
</script>
