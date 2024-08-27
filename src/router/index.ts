import { createWebHistory, createRouter } from 'vue-router'

import DefaultLayout from '@/layout/DefaultLayout.vue'
import MainLayout from '@/layout/MainLayout.vue'

import Home from '@/views/Home.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: DefaultLayout },
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: DefaultLayout },
    component: RegisterPage
  },
  {
    path: '/home',
    name: 'Dashboard',
    meta: { layout: MainLayout },
    component: Dashboard
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
