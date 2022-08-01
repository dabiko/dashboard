import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, AddView, ListView, LoginView, UserView, NotFoundView } from '@/views'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/add',
      name: 'AddView',
      component: AddView
    },
    {
      path: '/users',
      name: 'UsersView',
      component: UserView
    },
    {
      path: '/list',
      name: 'list',
      component: ListView
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFoundView',
      component: NotFoundView,
      meta: {
        requiresAuth: false
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
