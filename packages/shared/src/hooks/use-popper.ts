import {
  toRefs, watch, nextTick, onBeforeUnmount, reactive, Ref,
} from 'vue';
import { createPopper, Instance } from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import { Placement } from '@popperjs/core';

const toInt = (x: string) => parseInt(x, 10);

export function usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperNode,
  triggerNode,
}: {
  arrowPadding: Ref<string>,
  emit: any,
  locked: Ref<boolean>,
  offsetDistance: Ref<string>,
  offsetSkid: Ref<string>,
  placement: Ref<Placement>,
  popperNode: Ref<HTMLElement | null>,
  triggerNode: Ref<HTMLElement | null>,
}) {
  const state = reactive<{
    isOpen: boolean,
    popperInstance: Instance | null
  }>({
    isOpen: false,
    popperInstance: null,
  });

  // Enable or disable event listeners to optimize performance.
  const setPopperEventListeners = (enabled: boolean) => {
    state.popperInstance?.setOptions((options: any) => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled }],
    }));
  };

  const enablePopperEventListeners = () => setPopperEventListeners(true);
  const disablePopperEventListeners = () => setPopperEventListeners(false);

  const close = () => {
    if (!state.isOpen) {
      return;
    }

    state.isOpen = false;
    emit('close:popper');
  };

  const open = () => {
    if (state.isOpen) {
      return;
    }

    state.isOpen = true;
    emit('open:popper');
  };

  const initializePopper = async () => {
    await nextTick();
    state.popperInstance = createPopper(triggerNode.value as HTMLElement, popperNode.value as HTMLElement, {
      placement: placement.value,
      modifiers: [
        preventOverflow,
        flip,
        {
          name: 'flip',
          enabled: !locked.value,
        },
        arrow,
        {
          name: 'arrow',
          options: {
            padding: toInt(arrowPadding.value),
          },
        },
        offset,
        {
          name: 'offset',
          options: {
            offset: [toInt(offsetSkid.value), toInt(offsetDistance.value)],
          },
        },
      ],
    });

    // Update its position
    state.popperInstance.update();
  };

  // When isOpen or placement change
  watch([() => state.isOpen, placement], async ([isOpen]) => {
    if (isOpen) {
      await initializePopper();
      enablePopperEventListeners();
    } else {
      disablePopperEventListeners();
    }
  });

  onBeforeUnmount(() => {
    state.popperInstance?.destroy();
  });

  return {
    ...toRefs(state),
    open,
    close,
  };
}
