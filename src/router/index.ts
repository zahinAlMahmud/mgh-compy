import { createRouter, createWebHistory } from 'vue-router';
import SectionContent from '@/components/SectionContent.vue'; // make sure this file exists

const routes = [
  {
    path: '/',
    name: 'SectionContent',
    component: SectionContent
  },
  // Add other routes if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
