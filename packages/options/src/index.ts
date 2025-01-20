import IOptions from './options.vue';
import './options.scss';
import 'virtual:uno.css';

export { IOptions };
export type OptionsInstance = InstanceType<typeof IOptions>;
export * from './props';
