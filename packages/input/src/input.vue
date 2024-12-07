<template>
  <div
    :class="[
      ns.b(),
      ns.m(_size),
    ]"
    @click="clickHandler"
  >
    <div
      :class="[
        ns.b('wrapper'),
        ns.is('readonly', _readonly),
        ns.is('disabled', _disabled),
      ]"
    >
      <slot name="prefix" />
      <div
        v-if="!slots.prefix && props.prefixIcon"
        :class="[
          ns.b('prefix-icon'),
          ns.is('silence', _prefixIconIsSilence)
        ]"
      >
        <div :class="props.prefixIcon" />
      </div>
      <input
        ref="_ref"
        v-bind="_inputAttrs"
        :class="[
          ns.b('inner'),
        ]"
        @input="inputHandler"
      >
      <div
        v-if="props.clearable && modelValue.length"
        :class="[
          ns.b('clear-icon'),
        ]"
      >
        <div class="i-icon-delete" />
      </div>
      <slot name="suffix" />
      <div
        v-if="!slots.suffix && props.suffixIcon"
        :class="[
          ns.b('suffix-icon'),
          ns.is('silence', _suffixIconIsSilence)
        ]"
      >
        <div :class="props.suffixIcon" />
      </div>
    </div>
    <span
      v-if="_suffixText"
      :class="[ ns.b('suffix-text') ]"
    >{{ _suffixText }}</span>
  </div>
</template>

<script setup lang="ts">
import {
  computed, nextTick, onMounted, shallowRef,
  watch,
} from 'vue';
import { useNamespace } from '@i-element/shared';
import {
  defaultInputProps,
  InputEmits,
  InputProps,
  InputExpose,
  InputSlots,
} from './props';

defineOptions({
  name: 'IInput',
});

const props = withDefaults(
  defineProps<InputProps>(),
  defaultInputProps(),
);

const emit = defineEmits<InputEmits>();

const slots = defineSlots<InputSlots>();

const ns = useNamespace('input');
const _ref = shallowRef<HTMLInputElement>();
const _size = computed(() => props.size);
const _disabled = computed(() => props.disabled);
const _readonly = computed(() => props.readonly);
const _suffixText = computed(() => props.suffixText);
const _inputAttrs = computed(() => ({
  maxlength: props.maxlength,
  minlength: props.minlength,
  name: props.name,
  autocomplete: props.autocomplete,
  placeholder: props.placeholder,
  type: props.type,
  min: props.min,
  max: props.max,
  step: props.step,
  readonly: props.readonly ?? props.disabled,
  form: props.form,
}));
const _prefixIconIsSilence = computed(() => props.disabled || props.readonly || props.prefixIconSilent);
const _suffixIconIsSilence = computed(() => props.disabled || props.readonly || props.suffixIconSilent);

const nativeInputValue = computed(() => (props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)));
const setNativeInputValue = () => {
  const input = _ref.value;
  if (!input) return;
  input.value = nativeInputValue.value;
};

async function inputHandler(e: any) {
  const { value } = e.target;

  emit('update:modelValue', value);
  await nextTick();
  setNativeInputValue();
  // setCursor()
}

onMounted(() => {
  setNativeInputValue();
});

watch(nativeInputValue, () => setNativeInputValue());

watch(
  () => props.type,
  async () => {
    await nextTick();
    setNativeInputValue();
  },
);

function clickHandler(e: MouseEvent) {
  _ref.value?.focus();
  emit('focus', e);
}

function clear() {
  emit('update:modelValue', '');
}

function focus() {
  _ref.value?.focus();
}

defineExpose<InputExpose>({
  clear,
  focus,
});

</script>
