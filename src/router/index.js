import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/view/Home.vue';
import Company from '../components/view/Company.vue';

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Company',
    name: 'Company',
    component: Company
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;