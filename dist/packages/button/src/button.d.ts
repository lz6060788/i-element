import { InferVueDefaults } from '@i-element/shared';
import type Button from './button.vue';
export interface ButtonProps {
    /** 按钮的类型 */
    type?: '' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
    /** 按钮是否为朴素样式 */
    plain?: boolean;
    /** 按钮是否不可用 */
    disabled?: boolean;
}
export declare function defaultButtonProps(): Required<InferVueDefaults<ButtonProps>>;
export type ButtonInstance = InstanceType<typeof Button>;
