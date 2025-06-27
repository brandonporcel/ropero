import './assets/main.css';
import 'floating-vue/dist/style.css';

import FloatingVue from 'floating-vue';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(FloatingVue);
app.mount('#app');
