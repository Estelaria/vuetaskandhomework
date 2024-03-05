import { createRouter, createWebHistory } from 'vue-router'
import blogView from '@/views/blogView.vue'
import postView from '../views/postView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'blog',
      component: blogView
    },
    {
      path: '/',
      name: 'post',
      component: postView
    }
  ]
})

export default router
