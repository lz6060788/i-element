<script setup lang="ts">
import {
  themeVars,
  darkThemeVars,
  ConfigProvider,
} from '@i-element/ui';

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
    <p class="title">
      亮色主题
    </p>
    <ul class="colors-container">
      <li
        v-for="item in Object.keys(themeVars)"
        :key="item"
        class="item"
        :style="{
          '--color': themeVars[item as keyof typeof themeVars]
        }"
        @click="copy(item)"
      >
        <p>{{ item }}</p>
        <p>{{ themeVars[item as keyof typeof themeVars] }}</p>
      </li>
    </ul>
    <p class="title">
      暗色主题
    </p>
    <ConfigProvider :theme-vars="darkThemeVars">
      <ul class="colors-container dark">
        <li
          v-for="item in Object.keys(darkThemeVars)"
          :key="item"
          class="item"
          :style="{
            '--color': darkThemeVars[item as keyof typeof themeVars]
          }"
          @click="copy(item)"
        >
          <p>{{ item }}</p>
          <p>{{ darkThemeVars[item as keyof typeof darkThemeVars] }}</p>
        </li>
      </ul>
    </ConfigProvider>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 24px;
}

ul,
li {
  list-style: none;
}

.colors-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  max-width: 1080px;
  padding: 0;
  border-color: rgba(var(--i-color-background6));
  border-style: solid;
  border-width: 1px;
  border-right-width: 0;
  border-bottom-width: 0;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8px;
    margin-top: 0;
    cursor: pointer;
    background-color: var(--color);
    border-color: rgba(var(--i-color-background6));
    border-style: solid;
    border-width: 1px;
    border-top-width: 0;
    border-left-width: 0;

    p {
      margin: 8px 0;
      color: rgba(var(--i-color-font4));
      mix-blend-mode: difference;
    }

    &:hover {
      background-color: rgba(var(--i-color-background5));
    }
  }

  &.dark {
    p {
      color: bisque;
      mix-blend-mode: difference;
    }
  }
}
</style>
