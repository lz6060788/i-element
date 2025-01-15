/** @module Popconfirm */
import { InferVueDefaults } from '@i-element/shared';
// import { Placement } from '@popperjs/core';
import { type PopperProps, defaultPopperProps, type PopperEmits } from '@i-element/popper';
import { type ButtonProps } from '@i-element/button';
import type Popconfirm from './popconfirm.vue';

/** 气泡确认框组件的属性 */
export interface PopconfirmProps extends Omit<PopperProps, 'hover' | 'show'> {
  /**
   * 展示确定按钮
   * @default true
   */
  showConfirmBtn?: boolean;
  /**
   * 确定按钮文案
   * @default 确定
   */
  confirmBtnText?: string;
  /**
   * 确定按钮是否loading
   * @default false
   */
  confirmBtnLoading?: boolean;
  /**
   * 展示取消按钮
   * @default true
   */
  showCancelBtn?: boolean;
  /**
   * 取消按钮文案
   * @default 取消
   */
  cancelBtnText?: string;
  /**
   * 确认按钮属性
   * @default InferVueDefaults<PopconfirmProps>
   */
  confirmButtonProps?: ButtonProps | null;
  /**
   * 取消按钮属性
   * @default InferVueDefaults<PopconfirmProps>
   */
  cancelButtonProps?: ButtonProps | null;
}

/** @hidden */
export function defaultPopconfirmProps() {
  return {
    ...defaultPopperProps(),
    showConfirmBtn: true,
    confirmBtnText: '确定',
    confirmBtnLoading: false,
    showCancelBtn: true,
    cancelBtnText: '取消',
    confirmButtonProps: null,
    cancelButtonProps: null,
  } satisfies Required<InferVueDefaults<PopconfirmProps>>;
}

/** 气泡确认框组件的事件 */
export type PopconfirmEmits = {
  click: [value: MouseEvent];
  confirm: [value: MouseEvent];
  cancel: [value: MouseEvent];
} & PopperEmits;

/** 气泡确认框组件对外暴露的方法 */
export interface PopconfirmExpose {
  /** 关闭 */
  close: () => void
}

/** 气泡确认框组件的插槽信息 */
export interface PopconfirmSlots {
  content: any;
  default: any;
}

export type PopconfirmInstance = InstanceType<typeof Popconfirm>;
