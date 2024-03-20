import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentList from '../views/StudentList.vue';
import StudentDetails from '../views/StudentDetails.vue';
import AddStudent from '../views/AddStudent.vue';
import LoginView from '@/views/LoginView.vue';
import form from '@/components/form.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/studentlist',
      name: 'StudentList',
      component: StudentList
    },
    {
      path: '/students/:id',
      name: 'StudentDetails',
      component: StudentDetails
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component:  () => import('../views/AddStudent.vue')
    },
    {
    path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/notFoundView',
      name:'NotFoundView',
      component:  () => import('../views/NotFoundView.vue')
    },
    {
      path: '/dashboardView',
      name:'DashboardView',
      component:  () => import('../views/DashboardView.vue')
    },
    {
      path: '/form',
      name:'Form',
      component: form
    }
  ]
})

export default router
