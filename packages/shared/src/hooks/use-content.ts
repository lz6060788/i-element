import {
  ref, onMounted, onBeforeUnmount, watch, Ref,
} from 'vue';

export function useContent(slots: { content: any }, popperNode: Ref<HTMLElement | null>, content: Ref<HTMLElement | null | string>) {
  let observer: MutationObserver | null = null;
  const hasContent = ref(false);

  /**
 * Check the content slot
 */
  const checkContent = () => {
    if (slots.content) {
      hasContent.value = true;
    } else {
      hasContent.value = false;
    }
  };

  onMounted(() => {
    if (slots.content !== undefined || content.value) {
      hasContent.value = true;
    }

    observer = new MutationObserver(checkContent);
    observer.observe(popperNode.value as HTMLElement, {
      childList: true,
      subtree: true,
    });
  });

  onBeforeUnmount(() => observer?.disconnect());

  /**
   * Watch the content prop
   */
  watch(content, (_content) => {
    if (_content) {
      hasContent.value = true;
    } else {
      hasContent.value = false;
    }
  });

  return {
    hasContent,
  };
}
