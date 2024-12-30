// demo/src/main.ts
import { createApp } from 'vue';
// import { Theme } from '@i-element/ui';
import { Theme } from '@i-element/ui';
import App from './App.vue';
import './index.scss';

import 'virtual:uno.css';

createApp(App).use(Theme).mount('#app');
