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
  'show-count'?: boolean
  /**
   * 占位文本
   * @default ''
   */
  placeholder?: string
  /**
   * 是否可清除
   * @default false
   */
  clearable?: false
  /**
   * 是否显示密码显隐按钮
   * @default false
   */
  'show-password'?: false
  /**
   * 尺寸
   * @default 'medium'
   */
  size?: string
  /**
   * 前缀图标
   * @default ''
   */
  'prefix-icon'?: string
  /**
   * 前缀图标是否不响应事件
   * @default: true
   */
  'prefix-icon-silent'?: boolean
  /**
   * 后缀图标
   * @default ''
   */
  'suffix-icon'?: string
  /**
   * 后缀图标是否不响应事件
   * @default: true
   */
  'suffix-icon-silent'?: boolean
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
  'validate-event'?: boolean
  /**
   * 原生属性
   */
  max: string
  /**
   * 原生属性
   */
  min: string
  /**
   * 原生属性
   */
  step: string
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
    'show-count': false,
    placeholder: '',
    clearable: false,
    'show-password': false,
    size: 'medium',
    'prefix-icon': '',
    'prefix-icon-silent': true,
    'suffix-icon': '',
    'suffix-icon-silent': true,
    autocomplete: '',
    name: '',
    autofocus: false,
    form: '',
    label: '',
    tabindex: '',
    'validate-event': true,
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
  foccus: [e: FocusEvent];
  blur: [e: FocusEvent];
  keydown: [e: KeyboardEvent | Event];
};

/** 输入框组件对外暴露的方法 */
export interface InputExpose {
  /** 清空输入框 */
  clear: () => void
}

export type InputInstance = InstanceType<typeof Input>;
