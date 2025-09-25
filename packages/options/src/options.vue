<!--
 * @Author: 912525302@qq.com 912525302@qq.com
 * @Date: 2025-01-22 15:07:35
 * @LastEditors: 912525302@qq.com 912525302@qq.com
 * @LastEditTime: 2025-09-25 16:04:12
 * @FilePath: \i-element\packages\options\src\options.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    :class="[
      ns.b()
    ]"
  >
    <div
      :class="[
        ns.b('wrapper')
      ]"
    >
      <i-option
        v-for="item in _optionList"
        :key="item.value.toString()"
        v-bind="item"
        @click="clickHandle"
      >
        <template
          v-if="slots.prefix"
          #prefix="{ context, checked }"
        >
          <slot
            :context="context"
            :checked="checked"
          />
        </template>
        <template
          v-if="slots.default"
          #default="{ context, checked }"
        >
          <slot
            :context="context"
            :checked="checked"
          />
        </template>
        <template
          v-if="slots.suffix"
          #suffix="{ context, checked }"
        >
          <slot
            :context="context"
            :checked="checked"
          />
        </template>
      </i-option>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNamespace } from '@i-element/shared';
import { IOption, OptionClickCallbackParams, OptionValueType } from '@i-element/ui';
import {
  computed, provide, reactive, ref,
} from 'vue';
import {
  defaultOptionsProps,
  OptionsProps,
  OptionsEmits,
  OptionsContext,
  OptionsSlots,
} from './props';
import { OptionsKey } from './constant';
import { generateOptionList } from './utils';

const ns = useNamespace('options');
const emit = defineEmits<OptionsEmits>();
const slots = defineSlots<OptionsSlots>();
const props = withDefaults(
  defineProps<OptionsProps>(),
  defaultOptionsProps(),
);

const _multiple = computed(() => props.multiple);

const _value = computed(() => props.modelValue);
const setValue = (value: OptionValueType) => {
  if (!_multiple.value) {
    emit('update:modelValue', value);
  } else {
    // TODO 包含关系对引用类型可能判断不准需要调整
    if ((_value.value as OptionValueType[]).includes(value)) {
      emit('update:modelValue', (_value.value as OptionValueType[]).filter((item) => item === value));
      return;
    }
    emit('update:modelValue', [...(_value.value as OptionValueType[]), value]);
  }
};

const _optionList = computed(() => generateOptionList(props.options || [], props));

const _checkedChainValueMap = ref(new Map());
function clickHandle({ value, checked, valueChain }: OptionClickCallbackParams) {
  if (!checkModelValueValid()) {
    return;
  }
  setValue(value);
  if (checked) {
    if (props.multiple) {
      _checkedChainValueMap.value.set(value.toString(), valueChain);
    } else {
      _checkedChainValueMap.value = (new Map()).set(value.toString(), valueChain);
    }
  } else if (_checkedChainValueMap.value.has(value.toString())) {
    _checkedChainValueMap.value.delete(value.toString());
  }
}

function checkModelValueValid() {
  if (props.multiple && !Array.isArray(_value.value)) {
    console.warn('options模式为mutiple，但modalvalue类型非数组');
    return false;
  }
  return true;
}

/** 被选中的父子选项列表 */
const _checkedChainList = computed(() => Array.from(new Set(Array.from(_checkedChainValueMap.value.values()).flat())));
provide(
  OptionsKey,
  reactive({
    props,
    checkedChainList: _checkedChainList,
    clickHandle,
  }) as unknown as OptionsContext,
);
</script>
