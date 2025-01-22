<!-- eslint-disable vue/no-v-html -->
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
        <slot
          v-if="slots.default"
          :checked="_checked"
        />
        <span v-else>{{ props.label || props.value?.toString() }}</span>
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
          v-if="_children && _children.length"
          class="i-icon-arrow-right"
        />
        <div
          v-else-if="_showCheckedIcon && _checked"
          class="i-icon-right"
        />
      </div>
    </div>
    <i-popper
      v-if="_children && _children.length"
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
            :is-root="false"
            @click="subOptionclickHandle"
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
      :style="tooltipPopperStyle"
    />
  </li>
</template>

<script setup lang="ts">
import { useNamespace } from '@i-element/shared';
import {
  computed, inject, ref,
} from 'vue';
import { IPopper } from '@i-element/ui';
import {
  defaultOptionProps,
  OptionProps,
  OptionSlots,
  OptionEmits,
  OptionClickCallbackParams,
} from './props';
import { OptionsKey } from '../../options/src/constant';

defineOptions({
  name: 'IOption',
});

const emit = defineEmits<OptionEmits>();
const slots = defineSlots<OptionSlots>();
const props = withDefaults(
  defineProps<OptionProps>(),
  defaultOptionProps(),
);
const _optionsContext = inject(OptionsKey, {
  props: { modelValue: '' }, checkedChainList: [], isSlot: false, clickHandle: () => {},
});

const _disabled = computed(() => !!props.disabled);
const _checked = computed(() => _optionsContext.checkedChainList.includes(props.value));
const _showCheckedIcon = computed(() => _optionsContext.props.showCheckedIcon ?? props.showCheckedIcon);
const _showCheckBox = computed(() => _optionsContext.props.showCheckBox ?? props.showCheckBox);
const _suffix = computed(() => props.suffix);
const _tooltip = computed(() => props.tooltip);
const _children = computed(() => props.children);
const _closeAfterClick = computed(() => _optionsContext.props.closeAfterClick ?? props.closeAfterClick);
const _style = computed(() => `width: ${_optionsContext.props.width ?? props.width}px; min-width: ${_optionsContext.props.minwidth ?? props.minwidth}px`);
const _isRoot = computed(() => props.isRoot);

const ns = useNamespace('option');

function clickHandle() {
  // 插槽形式渲染且为根选项，调用options注入的click函数
  if (_optionsContext.isSlot && _isRoot.value) {
    _optionsContext?.clickHandle({
      value: props.value,
      checked: !_checked.value,
      valueChain: [props.value],
    });
  }
  // 非子节点不想上冒泡点击事件
  if (!_children.value?.length) {
    if (_closeAfterClick.value) {
      popperClose();
    }
    emit('click', {
      value: props.value,
      checked: !_checked.value,
      valueChain: [props.value],
    });
  }
}
function subOptionclickHandle(params: OptionClickCallbackParams) {
  if (_closeAfterClick.value) {
    popperClose();
  }
  // 子选项冒泡到根选项后，若为插槽形式渲染，则调用options注入的click函数
  if (_optionsContext.isSlot && _isRoot.value) {
    _optionsContext?.clickHandle({
      value: params.value,
      checked: params.checked,
      valueChain: [props.value, ...params.valueChain],
    });
  }
  emit('click', {
    value: params.value,
    checked: params.checked,
    valueChain: [props.value, ...params.valueChain],
  });
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
  popperClose();
  emit('mouseleave', props.value);
}
function popperClose() {
  tooltipPopperRef.value?.close();
  subOptionsPopperRef.value?.close();
}

// 子选项浮层样式覆盖
const optionsPopperStyle = {
  '--i-popper-padding': 'var(--i-options-padding-y) 0',
  '--i-popper-background-color': 'var(--i-options-background-color)',
  '--i-popper-border-color': 'var(--i-options-border-color)',
};
const tooltipPopperStyle = {
  '--i-popper-padding': '8px',
  '--i-popper-background-color': 'rgb(var(--i-color-yellow4))',
  '--i-popper-border-color': 'rgb(var(--i-color-yellow3))',
};
</script>
