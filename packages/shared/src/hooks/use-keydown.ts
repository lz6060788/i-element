import {
  onBeforeUnmount, onMounted, ShallowRef, getCurrentInstance,
} from 'vue';

export const useKeydown = (_ref: ShallowRef<HTMLElement | undefined>) => {
  const instance = getCurrentInstance();
  if (!instance) {
    throw new Error('useKeydown必须在组件内使用');
  }
  const emits = instance?.emit;

  const _keydownHandle = (e: KeyboardEvent) => {
    emits('keydown', e);
  };

  onMounted(() => {
    _ref.value!.addEventListener('keydown', _keydownHandle);
  });

  onBeforeUnmount(() => {
    _ref.value!.removeEventListener('keydown', _keydownHandle);
  });
};
