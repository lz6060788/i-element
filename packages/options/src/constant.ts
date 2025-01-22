import type { InjectionKey } from 'vue';
import { OptionsContext } from './props';

export const OptionsKey: InjectionKey<OptionsContext> = Symbol('IElementOptions');
