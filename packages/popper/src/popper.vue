<template>
  <div
    ref="popperContainerNode"
    :class="[
      ns.b()
    ]"
    :style="interactiveStyle"
    @mouseleave="hover && closePopper()"
  >
    <div
      ref="triggerNode"
      :class="[
        ns.b('wrapper')
      ]"
      @mouseover="hover && openPopper()"
      @click="togglePopper"
      @focus="openPopper"
      @keyup.esc="closePopper"
    >
      <!-- The default slot to trigger the popper  -->
      <slot />
    </div>
    <Transition name="fade">
      <div
        v-show="shouldShowPopper"
        ref="popperNode"
        :class="[
          ns.b('inner')
        ]"
        :style="{
          '--i-popper-zindex': zIndex
        }"
        @click="!interactive && closePopper()"
      >
        <slot
          name="content"
          :close="close"
          :is-open="modifiedIsOpen"
        >
          {{ content }}
        </slot>
        <Arrow v-if="arrow" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import debounce from 'debounce';
import {
  ref,
  computed,
  defineProps,
  toRefs,
  watch,
  watchEffect,
  onMounted,
} from 'vue';
import {
  usePopper, useContent, useClickAway, useNamespace,
} from '@i-element/shared';
import Arrow from './arrow.vue';
import {
  defaultPopperProps,
  PopperProps,
  PopperSlots,
  PopperEmits,
} from './props';

const emit = defineEmits<PopperEmits>();
const slots = defineSlots<PopperSlots>();
const props = withDefaults(
  defineProps<PopperProps>(),
  defaultPopperProps(),
);

const ns = useNamespace('popper');

const popperContainerNode = ref(null);
const popperNode = ref(null);
const triggerNode = ref(null);
const modifiedIsOpen = ref(false);

onMounted(() => {
  const children = slots.default();

  if (children && children.length > 1) {
    return console.error(
      `[Popper]: The <Popper> component expects only one child element at its root. You passed ${children.length} child nodes.`,
    );
  }
  return null;
});

const {
  arrow,
  arrowPadding,
  closeDelay,
  content,
  disableClickAway,
  disabled,
  interactive,
  locked,
  offsetDistance,
  offsetSkid,
  openDelay,
  placement,
  show,
  zIndex,
} = toRefs(props);

const { isOpen, open, close } = usePopper({
  arrowPadding,
  emit,
  locked,
  offsetDistance,
  offsetSkid,
  placement,
  popperNode,
  triggerNode,
});

const { hasContent } = useContent(slots, popperNode, content);

const manualMode = computed(() => show.value !== null);
const invalid = computed(() => disabled.value || !hasContent.value);
const shouldShowPopper = computed(() => isOpen.value && !invalid.value);
const enableClickAway = computed(
  () => !disableClickAway.value && !manualMode.value,
);
  // Add an invisible border to keep the Popper open when hovering from the trigger into it
const interactiveStyle = computed(() => (interactive.value ?
  `border: ${offsetDistance.value}px solid transparent; margin: -${offsetDistance.value}px;` :
  null));

const openPopperDebounce = debounce(open, +openDelay.value);
const closePopperDebounce = debounce(close, +closeDelay.value);

const openPopper = async () => {
  if (invalid.value || manualMode.value) {
    return;
  }

  closePopperDebounce.clear();
  openPopperDebounce();
};

const closePopper = async () => {
  if (manualMode.value) {
    return;
  }

  openPopperDebounce.clear();
  closePopperDebounce();
};

const togglePopper = () => (isOpen.value ? closePopper() : openPopper());

/**
   * If Popper is open, we automatically close it if it becomes
   * disabled or without content.
   */
watch([hasContent, disabled], ([_hasContent, _disabled]) => {
  if (isOpen.value && (!_hasContent || _disabled)) {
    close();
  }
});

/**
   * In order to eliminate flickering or visibly empty Poppers due to
   * the transition when using the isOpen slot property, we need to return a
   * separate debounced value based on isOpen.
   */
watch(isOpen, (_isOpen) => {
  if (_isOpen) {
    modifiedIsOpen.value = true;
  } else {
    debounce(() => {
      modifiedIsOpen.value = false;
    }, 200);
  }
});

/**
   * Watch for manual mode.
   */
watchEffect(() => {
  if (manualMode.value) {
    return show.value ? openPopperDebounce() : closePopperDebounce();
  }
});

/**
   * Use click away if it should be enabled.
   */
watchEffect(() => {
  if (enableClickAway.value) {
    useClickAway(popperContainerNode, closePopper);
  }
});
</script>
