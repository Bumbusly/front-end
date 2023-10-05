import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/Login/LoginView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import ProfileView from '@/views/Profile/ProfileView.vue'

// Import Toast Library
import { useToast } from 'vue-toastification'
// Get toast interface
const toast = useToast()

import store from './../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login2',
      component: LoginView,
      meta: {
        disableIfLoggedIn: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        disableIfLoggedIn: true
      }
    },
    {
      name: 'login',
      path: '/login',
      component: LoginView,
      meta: {
        public: true,
        disableIfLoggedIn: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        name: 'login'
      })
      toast.error(
        'You do not have permission to access the desired page, you must have an account to access this page.'
      )
    } else {
      next()
    }
  } else {
    if (store.getters.isAuthenticated && to.meta.disableIfLoggedIn) {
      next({
        name: 'profile'
      })
      toast.error(
        'You have entered your account with ' +
          store.getters.username +
          ' account. You must log out of your account to create or log in to another account.'
      )
    } else {
      next()
    }
  }
})

export default router
