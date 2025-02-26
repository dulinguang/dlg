import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/view/Home.vue';
import Company from '../components/view/Company.vue';
import Product from '../components/view/Product.vue';

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
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;