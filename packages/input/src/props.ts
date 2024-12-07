/** @module Input */
import { InferVueDefaults } from '@i-element/shared';
import type Input from './input.vue';

/** 输入框组件的属性 */
export interface InputProps {
  /**
   * 输入值，支持 v-model 双向绑定
   * @default ''
   */
  modelValue?: string;
  /**
   * 类型，与原生input一致
   * @default 'text'
   */
  type?: string;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否只读，只读时一定为禁用
   * @default false
   */
  readonly?: boolean;
  /**
   * 最大输入长度
   * @default ''
   */
  maxlength?: string | number
  /**
   * 最小输入长度
   * @default ''
   */
  minlength?: string | number
  /**
   * 统计数值
   * @default false
   */
  showCount?: boolean
  /**
   * 占位文本
   * @default ''
   */
  placeholder?: string
  /**
   * 是否可清除
   * @default false
   */
  clearable?: boolean
  /**
   * 是否显示密码显隐按钮
   * @default false
   */
  showPassword?: false
  /**
   * 尺寸
   * @default 'medium'
   */
  size?: string
  /**
   * 前缀图标
   * @default ''
   */
  prefixIcon?: string
  /**
   * 前缀图标是否不响应事件
   * @default: true
   */
  prefixIconSilent?: boolean
  /**
   * 后缀图标
   * @default ''
   */
  suffixIcon?: string
  /**
   * 后缀图标是否不响应事件
   * @default: true
   */
  suffixIconSilent?: boolean
  /**
   * 后缀内容，如单位等
   * @default ''
   */
  suffixText?: string
  /**
   * 是否自动补全
   * @default ''
   */
  autocomplete?: string
  /**
   * 原生属性
   * @default ''
   */
  name?: string
  /**
   * 原生属性
   * @default false
   */
  autofocus?: boolean
  /**
   * 原生属性
   */
  form?: string
  /**
   * 原生aria-label属性
   */
  label?: string
  /**
   * 原生属性
   */
  tabindex?: string | number
  /**
   * 是否触发表单验证
   * @default true
   */
  validateEvent?: boolean
  /**
   * 原生属性
   */
  max?: string
  /**
   * 原生属性
   */
  min?: string
  /**
   * 原生属性
   */
  step?: string
}

/** @hidden */
export function defaultInputProps(): Required<InferVueDefaults<InputProps>> {
  return {
    modelValue: '',
    type: 'text',
    disabled: false,
    readonly: false,
    maxlength: '',
    minlength: '',
    showCount: false,
    placeholder: '',
    clearable: false,
    showPassword: false,
    size: 'medium',
    prefixIcon: '',
    prefixIconSilent: true,
    suffixIcon: '',
    suffixIconSilent: true,
    suffixText: '',
    autocomplete: '',
    name: '',
    autofocus: false,
    form: '',
    label: '',
    tabindex: '',
    validateEvent: true,
    min: '',
    max: '',
    step: '',
  };
}

/** 输入框组件的事件 */
export type InputEmits = {
  'update:modelValue': [value: string];
  input: [value: string];
  change: [value: string];
  focus: [e: FocusEvent];
  blur: [e: FocusEvent];
  keydown: [e: KeyboardEvent | Event];
};

/** 输入框组件对外暴露的方法 */
export interface InputExpose {
  /** 清空输入框 */
  clear: () => void
  /** 聚焦 */
  focus: () => void
}

/** 按钮组件的插槽信息 */
export interface InputSlots {
  prefix: any;
  suffix: any;
}

export type InputInstance = InstanceType<typeof Input>;
