import { Component } from 'vue';
import { IElementCssVarsConfig } from '@i-element/styles';
import { InferVueDefaults } from '@i-element/shared';
import type ConfigProvider from './config-provider.vue';
export interface ConfigProviderProps {
    /** 组件的节点将被渲染的标签类型 */
    tag?: string | Component;
    /** 应用在该节点上的主题变量 */
    themeVars?: IElementCssVarsConfig;
}
export declare function defaultConfigProviderProps(): Required<InferVueDefaults<ConfigProviderProps>>;
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>;
