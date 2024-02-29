import { createRouter, createWebHistory } from 'vue-router'
import whyUs from '../views/whyUs.vue'
import AppVue from '@/App.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/whyUs',
      name: 'whyUs',
      component: () => import('../views/whyUs.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
    {
      path: '/hobbies',
      name: 'hobbies',
      component: () => import('../views/hobbies.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/contact.vue')
    }
  ]
})

export default router
