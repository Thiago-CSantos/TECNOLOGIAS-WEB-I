import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/Home.vue';

const routes = [
  {
    path: '/Home',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
