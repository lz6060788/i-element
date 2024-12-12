/** @module Button */
import { InferVueDefaults } from '@i-element/shared';

export type ButtonType = '' | 'primary' | 'success' | 'warning' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

/** 按钮组件的属性 */
export interface ButtonProps {
  /**
   * 按钮的类型
   * @default ''
   */
  type?: ButtonType;

  /**
   * 按钮是否不可用
   * @default false
   */
  disabled?: boolean;

  /**
   * 原生类型
   * @default button
   */
  nativeType?: string;

  /**
   * 是否加载中
   * @default false
   */
  loading: boolean,

  /**
   * 自定义标签
   * @default 'button'
   */
  tag: string,

  /**
   * 大小
   * @default false
   */
  size: ButtonSize,

  /**
   * 图标
   * @default ''
   */
  icon?: string

}

export function defaultButtonProps() {
  return {
    type: '',
    disabled: false,
    nativeType: 'button',
    loading: false,
    tag: 'button',
    size: 'small',
    icon: '',
  } satisfies Required<InferVueDefaults<ButtonProps>>;
}

export type ButtonEmits = {
  click: [value: MouseEvent]
};

/** 按钮组件的插槽信息 */
export interface ButtonSlots {
  default: any;
  icon: any;
}
