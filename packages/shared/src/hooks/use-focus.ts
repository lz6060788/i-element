import {
  onBeforeUnmount, onMounted, ShallowRef, ref, getCurrentInstance,
} from 'vue';

export const useFocus = (_ref: ShallowRef<HTMLElement | undefined>) => {
  const isFocus = ref(false);

  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error('useFocus必须在组件内使用');
  }
  const emits = instance?.emit;

  const focus = () => {
    _ref.value!.focus();
  };

  const _focusHandle = (e: FocusEvent) => {
    isFocus.value = true;
    emits('focus', e);
  };

  const _blurHandle = (e: FocusEvent) => {
    isFocus.value = false;
    emits('blur', e);
  };

  onMounted(() => {
    _ref.value!.addEventListener('focus', _focusHandle);
    _ref.value!.addEventListener('blur', _blurHandle);
  });

  onBeforeUnmount(() => {
    _ref.value!.removeEventListener('focus', _focusHandle);
    _ref.value!.removeEventListener('blur', _blurHandle);
  });

  return {
    focus,
    isFocus,
  };
};
