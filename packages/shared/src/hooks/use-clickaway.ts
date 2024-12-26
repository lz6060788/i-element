import { Ref, unref } from 'vue';
import { useEventListener } from './use-eventListener';

export function useClickAway(target: Ref<HTMLElement | null>, handler: (e: Event) => void) {
  const event = 'pointerdown';

  if (typeof window === 'undefined' || !window) {
    return;
  }

  const listener = (_event: Event) => {
    const el = unref(target);
    if (!el) {
      return;
    }

    if (el === _event.target || _event.composedPath().includes(el)) {
      return;
    }

    handler(_event);
  };

  useEventListener(window.document.body, event, listener);
}
