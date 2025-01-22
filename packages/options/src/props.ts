/** @module Options */
import { InferVueDefaults } from '@i-element/shared';
import {
  type OptionValueType, type OptionProps, OptionInstance, OptionClickCallbackParams,
} from '../../option/src/index';
import type Options from './options.vue';

/** 列表选项组件的属性 */
export interface OptionsProps {
  /**
   * 当前选中值
   */
  modelValue: OptionValueType | OptionValueType[]
  /**
   * 列表数据
   * @default []
   */
  options?: OptionProps[] | null;
  /**
   * 是否多选
   * @default false
   */
  multiple?: boolean;
  /**
   * 宽度，(若不设置默认100%，子选项宽度适应内容)，同option
   * @default null
   */
  width?: null | number
  /**
   * 最小宽度，同option
   * @default 0
   */
  minwidth?: null | number
  /**
   * 点击后关闭，同option
   * @default true
   */
  closeAfterClick?: boolean
  /**
   * 是否显示选中时的勾选图标，同option
   * @default true
   */
  showCheckedIcon?: boolean;
  /**
   * 是否显示勾选框，同option
   * @default false
   */
  showCheckBox?: boolean
}

/** @hidden */
export function defaultOptionsProps() {
  return {
    options: null,
    modelValue: '',
    multiple: false,
    closeAfterClick: true,
    showCheckBox: false,
    showCheckedIcon: true,
    width: null,
    minwidth: null,
  } satisfies Required<InferVueDefaults<OptionsProps>>;
}

/** 列表选项组件的事件 */
export type OptionsEmits = {
  'click': [value: OptionValueType],
  'update:modelValue': [value: OptionValueType],
};

/** 列表选项组件对外暴露的方法 */
export interface OptionsExpose {
  setChecked: (value: OptionsProps['modelValue']) => void
}

/** 列表选项组件的插槽信息 */
export interface OptionsSlots {
  default?: () => OptionInstance[]
}

/** 上下文，通过provide()提供给子组件 */
export interface OptionsContext {
  props: OptionsProps,
  /** 被选中的值链列表，包含被所有选中的子选项的所在链组成的集合 */
  checkedChainList: OptionsProps['modelValue'][],
  /** 是否为slot渲染选项 */
  isSlot: boolean,
  /** 选中事件处理函数 */
  clickHandle: (params: OptionClickCallbackParams) => void
}

export type OptionsInstance = InstanceType<typeof Options>;
