/** @module Popper */
import { InferVueDefaults } from '@i-element/shared';
import { Placement } from '@popperjs/core';
import type Popper from './popper.vue';

/** 浮层组件的属性 */
export interface PopperProps {
  /**
   * 弹出位置
   * @default bottom
   */
  placement?: Placement;
  /**
   * 禁用点击区域外关闭
   * @default false
   */
  disableClickAway?: boolean;
  /**
   * 偏移像素
   * @default 0
   */
  offsetSkid?: string;
  /**
   * 距触发元素距离
   * @default 12
   */
  offsetDistance?: string;
  /**
   * 通过悬浮触发
   * @default false
   */
  hover?: boolean;
  /**
   * 手动触发显示隐藏
   * @default null
   */
  show?: boolean | null;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 弹出延时
   * @default 0
   */
  openDelay?: number | string;
  /**
   * 隐藏延时
   * @default 0
   */
  closeDelay?: number | string;
  /**
   * 样式层级
   * @default 9999
   */
  zIndex?: number | string;
  /**
   * 是否显示箭头
   * @default false
   */
  arrow?: boolean;
  /**
   * 箭头偏移量
   * @default 0
   */
  arrowPadding?: string;
  /**
   * 是否可交互，若为false，则在点击或者悬浮后会关闭
   * @default true
   */
  interactive?: boolean;
  /**
   * 是否锁定位置
   * @default false
   */
  locked?: boolean;
  /**
   * 弹出文本内容
   * @default null
   */
  content?: string | null
}

/** @hidden */
export function defaultPopperProps(): Required<InferVueDefaults<PopperProps>> {
  return {
    placement: 'bottom',
    disableClickAway: false,
    offsetSkid: '0',
    offsetDistance: '12',
    hover: true,
    show: null,
    disabled: false,
    openDelay: 0,
    closeDelay: 0,
    zIndex: 9999,
    arrow: false,
    arrowPadding: '0',
    interactive: true,
    locked: true,
    content: null,
  };
}

/** 浮层组件的事件 */
export type PopperEmits = {
  'open:popper': never;
  'close:popper': never;
};

/** 浮层组件对外暴露的方法 */
export interface PopperExpose {
}

/** 按钮组件的插槽信息 */
export interface PopperSlots {
  content: any;
  default: any;
}

export type PopperInstance = InstanceType<typeof Popper>;
