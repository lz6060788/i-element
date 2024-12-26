import IPopper from './popper.vue';
import './popper.scss';
import 'virtual:uno.css';

export { IPopper };
export type PopperInstance = InstanceType<typeof IPopper>;
export * from './props';
