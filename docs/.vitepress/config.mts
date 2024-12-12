import { defineConfig } from 'vitepress';
import { mdPlugin } from './plugins';

import apiConfig from '../configs/api.json';
import componentsConfig from '../configs/components.json';

// 配置参考：https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'IElement',
  description: 'Vue3 组件库',
  markdown: {
    config: (md) => {
      md.use(mdPlugin);
    },
  },
  base: '/i-element/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: 'API', link: '/api/README' },
      { text: '演练场', link: '/playground' },
    ],
    outline: {
      level: [2, 3],
    },
    sidebar: {
      // 指南部分的章节导航
      '/guide/': [
        {
          text: '指引',
          items: [
            { text: '组件库介绍', link: '/guide/' },
            { text: '快速开始', link: '/guide/quick-start' },
          ],
        },
      ],
      // 组件部分的章节导航
      '/components/': componentsConfig,
      // API 文档部分的章节导航
      '/api/': apiConfig,
    },
  },
});
