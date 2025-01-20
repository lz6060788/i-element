<template>
  <li
    ref="optionRef"
    :class="[
      ns.b(),
      ns.is('disabled', _disabled),
      ns.is('checked', _checked),
    ]"
    :style="_style"
    @click.stop="clickHandle"
    @mouseenter="mouseenterHandle"
    @mouseleave="mouseleaveHandle"
  >
    <div
      :class="[
        ns.b('wrapper')
      ]"
    >
      <div
        :class="[
          ns.b('prefix')
        ]"
      >
        <input
          v-if="_showCheckBox"
          type="checkbox"
          :checked="_checked"
        >
        <slot
          v-if="slots.prefix"
          :checked="_checked"
          name="prefix"
        />
      </div>
      <div
        :class="[
          ns.b('inner')
        ]"
      >
        <span>{{ props.label || props.value?.toString() }}</span>
      </div>
      <div
        :class="[
          ns.b('suffix')
        ]"
      >
        <slot
          v-if="slots.suffix"
          :checked="_checked"
          name="suffix"
        />
        <template v-else-if="_suffix">
          <template v-if="_suffix.html && _suffix.raw">
            <span v-html="_suffix.raw" />
          </template>
          <span
            v-else-if="_suffix.text"
            :style="_suffix.injectStyle"
          >{{ _suffix.text }}</span>
          <div
            v-else
            :class="[_suffix.icon]"
            :style="_suffix.injectStyle"
          />
        </template>
        <div
          v-if="_children"
          class="i-icon-arrow-right"
        />
        <div
          v-else-if="_showCheckedIcon && _checked"
          class="i-icon-right"
        />
      </div>
    </div>
    <i-popper
      v-if="_children"
      ref="subOptionsPopperRef"
      placement="right-start"
      offset-distance="0"
      :hover="false"
      :target-element="optionRef"
      :style="optionsPopperStyle"
    >
      <template #content>
        <ul>
          <i-option
            v-for="item in _children"
            :key="item.value.toString()"
            v-bind="item"
          />
        </ul>
      </template>
    </i-popper>
    <i-popper
      v-else-if="_tooltip"
      ref="tooltipPopperRef"
      :content="_tooltip"
      placement="right-start"
      offset-distance="0"
      :hover="false"
      :target-element="optionRef"
    />
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from '@i-element/shared';
import { computed, ref } from 'vue';
import { IPopper } from '@i-element/ui';
import {
  defaultOptionProps,
  OptionProps,
  OptionSlots,
  OptionEmits,
} from './props';

defineOptions({
  name: 'IOption',
});

const emit = defineEmits<OptionEmits>();
const slots = defineSlots<OptionSlots>();
const props = withDefaults(
  defineProps<OptionProps>(),
  defaultOptionProps(),
);

const _disabled = computed(() => !!props.disabled);
const _checked = computed(() => !!props.checked);
const _showCheckedIcon = computed(() => !!props.showCheckedIcon);
const _showCheckBox = computed(() => !!props.showCheckBox);
const _suffix = computed(() => props.suffix);
const _tooltip = computed(() => props.tooltip);
const _children = computed(() => props.children);
const _style = computed(() => `width: ${props.width}px; min-width: ${props.minwidth}px`);

const ns = useNamespace('option');

function clickHandle() {
  emit('click', props.value);
}

const optionRef = ref();
/** 提示浮层 */
const tooltipPopperRef = ref<typeof IPopper>();
/** 子选项浮层 */
const subOptionsPopperRef = ref<typeof IPopper>();
function mouseenterHandle() {
  tooltipPopperRef.value?.open();
  subOptionsPopperRef.value?.open();
  emit('mouseenter', props.value);
}

function mouseleaveHandle() {
  tooltipPopperRef.value?.close();
  subOptionsPopperRef.value?.close();
  emit('mouseleave', props.value);
}

// 子选项浮层样式覆盖
const optionsPopperStyle = {
  '--i-popper-padding': 'var(--i-options-padding-y) 0',
  '--i-popper-background-color': 'var(--i-options-background-color)',
  '--i-popper-border-color': 'var(--i-options-border-color)',
};
</script>
