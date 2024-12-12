/** @module Text */
import { InferVueDefaults } from '@i-element/shared';

export type TextType = '' | 'primary' | 'success' | 'warning' | 'danger';
export type TextSize = 'small' | 'medium' | 'large';

/** 文本组件的属性 */
export interface TextProps {
  /**
   * 文本类型
   * @default ''
   */
  type?: TextType;

  /**
   * 文本大小
   * @default 'small'
   */
  size?: TextSize;

  /**
   * 跳转链接，存在tag属性为a时生效
   * @default ''
   */
  href?: string;

  /**
   * target，存在tag属性为a时生效
   * @default ''
   */
  target?: '_blank' | '_self';

  /**
   * 自定义标签
   * @default 'span'
   */
  tag?: 'span' | 'a' | 'p',

  /**
   * 是否加载中
   * @default false
   */
  loading?: boolean

  /**
   * 文本点击是否不可用
   * @default false
   */
  disabled?: boolean;

  /**
   * 前置图标
   * @default ''
   */
  prefixIcon?: string

  /**
   * 后置图标
   * @default ''
   */
  suffixIcon?: string
}

export function defaultTextProps() {
  return {
    type: '',
    size: 'small',
    disabled: false,
    loading: false,
    target: '_blank',
    href: '',
    tag: 'span',
    prefixIcon: '',
    suffixIcon: '',
  } satisfies Required<InferVueDefaults<TextProps>>;
}

export type TextEmits = {
  click: [value: MouseEvent]
};

/** 文本组件的插槽信息 */
export interface TextSlots {
  default: any;
  icon: any;
}
