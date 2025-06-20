import { createRouter, createWebHistory } from 'vue-router';

import MOCK_USER from './config/user';
import About from './pages/About.vue';
import User from './pages/User.vue';
import Wearable from './pages/Wearable.vue';

const routes = [
  { path: '/', redirect: `/${MOCK_USER.username}` },
  { path: '/about', component: About },
  { path: '/:username/:wearableSlug', component: Wearable },
  { path: '/:username', component: User },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
