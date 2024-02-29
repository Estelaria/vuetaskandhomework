import { createRouter, createWebHistory } from 'vue-router'
import whyUs from '../views/whyUs.vue'
import AppVue from '@/App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/whyUs',
      name: 'whyUs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/whyUs.vue')
    }
  ]
})

export default router
