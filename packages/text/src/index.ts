import IText from './text.vue';
import './text.scss';
import 'virtual:uno.css';

export { IText };
export type TextInstance = InstanceType<typeof IText>;
export * from './props';
