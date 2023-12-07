import { createRouter, createWebHistory } from 'vue-router'

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
    }
  ]
})

export default router
