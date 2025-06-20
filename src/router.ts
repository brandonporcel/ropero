import { createRouter, createWebHistory } from 'vue-router';

import Wearable from './pages/Wearable.vue';
import About from './pages/About.vue';
import User from './pages/User.vue';

const routes = [
  { path: '/', redirect: '/hardouserwithfunnyname' },
  { path: '/about', component: About },
  { path: '/:username/:wearable', component: Wearable },
  { path: '/:username', component: User },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
