/** @module Option */
import { InferVueDefaults } from '@i-element/shared';
import type Option from './option.vue';

export type OptionValueType = string | number | Symbol | Boolean | object;

export interface OptionSuffixType {
  /**
   * 后缀文本
   */
  text?: string;
  /**
   * 后缀文本样式
   */
  injectStyle?: string;
  /**
   * 后缀图标，当前图标使用需要先引入图标库至unocss框架
   */
  icon?: string;
  /**
   * 是否使用html字符串的形式渲染，慎用，请确保内容安全，否则容易遭受xss攻击
   */
  html?: boolean;
  /**
   * html字符串内容
   */
  raw?: string;
}

/** 选项组件的属性 */
export interface OptionProps {
  /**
   * 选项显示标签
   * @default 与value相同
  */
  label?: string;
  /**
   * 选项值
   * @requires
  */
  value: OptionValueType;
  /**
   * 是否禁用
   * @default false
  */
  disabled?: boolean;
  /**
   * 是否显示选中时的勾选图标
   * @default true
   */
  showCheckedIcon?: boolean;
  /**
   * 是否显示勾选框
   * @default false
   */
  showCheckBox?: boolean
  /**
   * 后缀内容，优先级html > text > icon
   * @default null
  */
  suffix?: OptionSuffixType | null;
  /**
   * 子选项
   * @default null
  */
  children?: OptionProps[] | null;
  /**
   * 是否选中
   * @default false
  */
  checked?: boolean;
  /**
   * 提示信息
   * @default ''
   */
  tooltip?: string;
  /**
   * 宽度，(若不设置默认100%，子选项宽度适应内容)
   * @default null
   */
  width?: null | number
  /**
   * 最小宽度
   * @default 0
   */
  minwidth?: null | number
}

/** @hidden */
export function defaultOptionProps() {
  return {
    label: '',
    value: '',
    disabled: false,
    showCheckedIcon: true,
    showCheckBox: false,
    suffix: null,
    children: null,
    checked: false,
    tooltip: '',
    width: null,
    minwidth: 0,
  } satisfies Required<InferVueDefaults<OptionProps>>;
}

/** 选项组件的事件 */
export type OptionEmits = {
  'click': [value: OptionValueType],
  'mouseenter': [value: OptionValueType],
  'mouseleave': [value: OptionValueType],
};

/** 选项组件对外暴露的方法 */
export interface OptionExpose {
}

/** 选项组件的插槽信息 */
export interface OptionSlots {
  /** 默认显示的内容，相当于label属性 */
  default?: (props: { checked: boolean }) => any;
  prefix?: (props: { checked: boolean }) => any;
  suffix?: (props: { checked: boolean }) => any;
}

export type OptionInstance = InstanceType<typeof Option>;
