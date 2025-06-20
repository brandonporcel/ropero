import { createRouter, createWebHistory } from 'vue-router';

import About from './pages/About.vue';
import User from './pages/User.vue';
import Wearable from './pages/Wearable.vue';

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
