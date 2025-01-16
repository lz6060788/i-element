<template>
  <div
    :class="[
      ns.b()
    ]"
  >
    <i-popper
      v-bind="_popperProps"
    >
      <template #content>
        <div class="content">
          <slot
            v-if="slots.content"
            name="content"
          />
          <p v-else>
            {{ props.content }}
          </p>
          <div class="footer">
            <i-button
              v-if="props.showConfirmBtn"
              :class="[
                ns.b('btn-confirm')
              ]"
              type="primary"
              v-bind="_confirmButtonProps"
              @click="confirmHandle"
            >
              {{ props.confirmBtnText }}
            </i-button>
            <i-button
              v-if="props.showCancelBtn"
              :class="[
                ns.b('btn-cancel')
              ]"
              v-bind="_cancelButtonProps"
              @click="cancelHandle"
            >
              {{ props.cancelBtnText }}
            </i-button>
          </div>
        </div>
      </template>
      <div @click="clickHandle">
        <slot />
      </div>
    </i-popper>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  useNamespace,
} from '@i-element/shared';
import { IPopper } from '@i-element/popper';
import { IButton } from '@i-element/button';
import {
  defaultPopconfirmProps,
  PopconfirmProps,
  PopconfirmSlots,
  PopconfirmEmits,
  PopconfirmExpose,
} from './props';

const ns = useNamespace('popconfirm');

const emit = defineEmits<PopconfirmEmits>();
const slots = defineSlots<PopconfirmSlots>();
const props = withDefaults(
  defineProps<PopconfirmProps>(),
  defaultPopconfirmProps(),
);

const show = ref(false);

const _popperProps = computed(() => ({
  ...props,
  hover: false,
  show,
}));

const _confirmButtonProps = computed(() => props.confirmButtonProps || {});
const _cancelButtonProps = computed(() => props.cancelButtonProps || {});

function clickHandle(e: MouseEvent) {
  console.log(e);
  show.value = true;
  emit('click', e);
}

function confirmHandle(e: MouseEvent) {
  emit('confirm', e);
}

function cancelHandle(e: MouseEvent) {
  show.value = false;
  emit('cancel', e);
}

function close() {
  show.value = false;
}
defineExpose<PopconfirmExpose>({
  close,
});
</script>
