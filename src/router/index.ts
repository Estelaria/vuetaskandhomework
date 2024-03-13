import { createRouter, createWebHistory } from 'vue-router'
import blogView from '../views/blogView.vue'
import postView from '@/views/postView.vue'
import homeView from '../views/homeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: blogView
    },
    ,
    {
      path: '/post',
      name: 'post',
      component: postView
    },
    {
      path: '/post/:id',
      name: 'post',
      component: postView
    }
  ]
})

export default router
