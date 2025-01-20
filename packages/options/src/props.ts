/** @module Options */
import { InferVueDefaults } from '@i-element/shared';
import type { OptionValueType, OptionProps } from '@i-element/option';
import type Options from './options.vue';

/** 列表选项组件的属性 */
export interface OptionsProps {
  /**
   * 当前所需值
   */
  value: OptionValueType
  /**
   * 列表数据
   * @default []
   */
  data?: OptionProps[];
}

/** @hidden */
export function defaultOptionsProps() {
  return {
    data: () => [] as OptionProps[],
    value: '',
  } satisfies Required<InferVueDefaults<OptionsProps>>;
}

/** 列表选项组件的事件 */
export type OptionsEmits = {
};

/** 列表选项组件对外暴露的方法 */
export interface OptionsExpose {
}

/** 列表选项组件的插槽信息 */
export interface OptionsSlots {
}

export type OptionsInstance = InstanceType<typeof Options>;
