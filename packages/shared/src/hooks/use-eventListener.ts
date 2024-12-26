import {
  isRef, watch, unref, onMounted, onBeforeUnmount,
} from 'vue';

export function useEventListener(target: HTMLElement, event: keyof HTMLElementEventMap, handler: EventListenerOrEventListenerObject) {
  if (isRef(target)) {
    watch(target, (value: HTMLElement, oldValue: HTMLElement) => {
      oldValue?.removeEventListener(event, handler);
      value?.addEventListener(event, handler);
    });
  } else {
    onMounted(() => {
      target.addEventListener(event, handler);
    });
  }

  onBeforeUnmount(() => {
    unref(target)?.removeEventListener(event, handler);
  });
}
