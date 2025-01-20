<script setup lang="ts">

const list = ['i-icon-account', 'i-icon-add', 'i-icon-arrow', 'i-icon-back', 'i-icon-bell',
  'i-icon-chart', 'i-icon-close-circle', 'i-icon-close', 'i-icon-code', 'i-icon-collapse',
  'i-icon-delete', 'i-icon-download', 'i-icon-dragable', 'i-icon-edit', 'i-icon-envelope', 'i-icon-eye-close', 'i-icon-eye', 'i-icon-flash',
  'i-icon-fresh', 'i-icon-help', 'i-icon-info-fill', 'i-icon-info', 'i-icon-keyboard', 'i-icon-light',
  'i-icon-list', 'i-icon-little-triangle', 'i-icon-lock-off', 'i-icon-lock-on', 'i-icon-more', 'i-icon-password', 'i-icon-plus', 'i-icon-question',
  'i-icon-remove', 'i-icon-right', 'i-icon-setting', 'i-icon-slider', 'i-icon-strategy', 'i-icon-success-fill',
  'i-icon-success', 'i-icon-switch', 'i-icon-table', 'i-icon-top', 'i-icon-trend', 'i-icon-trush', 'i-icon-up', 'i-icon-warning', 'i-icon-loading',
  'i-icon-arrow-right',
];
const filledList = ['i-icon-fill-account', 'i-icon-fill-add', 'i-icon-fill-arrow', 'i-icon-fill-back', 'i-icon-fill-bell', 'i-icon-fill-chart',
  'i-icon-fill-close-circle', 'i-icon-fill-close', 'i-icon-fill-code', 'i-icon-fill-collapse', 'i-icon-fill-delete', 'i-icon-fill-download',
  'i-icon-fill-dragable', 'i-icon-fill-edit', 'i-icon-fill-envelope', 'i-icon-fill-eye-close', 'i-icon-fill-eye', 'i-icon-fill-flash',
  'i-icon-fill-fresh', 'i-icon-fill-help', 'i-icon-fill-info-fill', 'i-icon-fill-info', 'i-icon-fill-keyboard', 'i-icon-fill-light',
  'i-icon-fill-list', 'i-icon-fill-little-triangle', 'i-icon-fill-loading', 'i-icon-fill-lock-off', 'i-icon-fill-lock-on', 'i-icon-fill-more',
  'i-icon-fill-password', 'i-icon-fill-plus', 'i-icon-fill-question', 'i-icon-fill-remove', 'i-icon-fill-repair', 'i-icon-fill-right',
  'i-icon-fill-setting', 'i-icon-fill-slider', 'i-icon-fill-strategy', 'i-icon-fill-success-fill', 'i-icon-fill-success', 'i-icon-fill-switch',
  'i-icon-fill-table', 'i-icon-fill-top', 'i-icon-fill-trend', 'i-icon-fill-trush', 'i-icon-fill-up', 'i-icon-fill-warning', 'i-icon-arrow-right',
];

const largeList = ['i-icon-fill-operate-buy', 'i-icon-fill-operate-position', 'i-icon-fill-operate-sale'];

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
    <h1>非除色图标</h1>
    <ul class="icons-container">
      <li
        v-for="item in filledList"
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
