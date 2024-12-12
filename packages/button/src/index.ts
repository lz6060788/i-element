import IButton from './button.vue';
import './button.scss';
import 'virtual:uno.css';

export { IButton };
export type ButtonInstance = InstanceType<typeof IButton>;
export * from './props';
