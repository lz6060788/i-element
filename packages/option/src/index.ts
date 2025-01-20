import IOption from './option.vue';
import './option.scss';
import 'virtual:uno.css';

export { IOption };
export type OptionInstance = InstanceType<typeof IOption>;
export * from './props';
