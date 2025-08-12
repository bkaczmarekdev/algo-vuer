import { createRouter, createWebHistory } from 'vue-router'
import CountingSortView from '../views/CountingSortView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/CountingSortView',
      name: 'CountingSortView',
      component: CountingSortView,
    },
  ],
})

export default router
