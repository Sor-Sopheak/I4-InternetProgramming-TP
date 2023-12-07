import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'LoginView',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/home',
      name: 'HomeView',
      component: () => import('../views/HomeView.vue')
    },
  ]
})

export default router
