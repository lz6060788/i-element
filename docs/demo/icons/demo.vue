<script setup lang="ts">
const list = ['i-icon-account', 'i-icon-add', 'i-icon-arrow', 'i-icon-back', 'i-icon-bell',
  'i-icon-chart', 'i-icon-close-circle', 'i-icon-close', 'i-icon-code', 'i-icon-collapse',
  'i-icon-delete', 'i-icon-download', 'i-icon-dragable', 'i-icon-edit', 'i-icon-envelope', 'i-icon-eye-close', 'i-icon-eye', 'i-icon-flash',
  'i-icon-fresh', 'i-icon-help', 'i-icon-info-fill', 'i-icon-info', 'i-icon-keyboard', 'i-icon-light',
  'i-icon-list', 'i-icon-little-triangle', 'i-icon-lock-off', 'i-icon-lock-on', 'i-icon-more', 'i-icon-password', 'i-icon-plus', 'i-icon-question',
  'i-icon-remove', 'i-icon-right', 'i-icon-setting', 'i-icon-slider', 'i-icon-strategy', 'i-icon-success-fill',
  'i-icon-success', 'i-icon-switch', 'i-icon-table', 'i-icon-top', 'i-icon-trend', 'i-icon-trush', 'i-icon-up', 'i-icon-warning',
];

const largeList = ['i-icon-operate-buy', 'i-icon-operate-position', 'i-icon-operate-sale'];

const copy = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('复制成功');
  } catch (error) {
    alert('复制失败！可能是浏览器不兼容');
  }
};
</script>

<template>
  <div class="demo">
    <ul class="icons-container">
      <li
        v-for="item in list"
        :key="item"
        class="icon-item"
        @click="copy(item)"
      >
        <div
          class="icon"
          :class="item"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
    <ul class="icons-container large">
      <li
        v-for="item in largeList"
        :key="item"
        class="icon-item"
        @click="copy(item)"
      >
        <div
          class="icon"
          :class="item"
        />
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul,
li {
  list-style: none;
}

.icons-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0;
  color: rgba(var(--i-color-font2));
  border-color: rgba(var(--i-color-background6));
  border-style: solid;
  border-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;

  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 0;
    cursor: pointer;
    border-color: rgba(var(--i-color-background6));
    border-style: solid;
    border-width: 1px;
    border-top-width: 0;
    border-left-width: 0;

    &:hover {
      background-color: rgba(var(--i-color-background5));
    }

    .icon {
      width: 16px;
      height: 16px;
      margin-bottom: 8px;
    }
  }

  &.large {
    grid-template-columns: repeat(3, 1fr);

    .icon {
      width: 64px;
      height: 64px;
    }
  }
}
</style>
