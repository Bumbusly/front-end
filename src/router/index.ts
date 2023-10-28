import {createRouter, createWebHistory} from 'vue-router'
import SigninView from '@/views/AuthViews/Signin/SigninView.vue'
import SignupView from '@/views/AuthViews/Signup/SignupView.vue'
import ForgotPasswordView from '/src/views/AuthViews/ForgotPassword/ForgotPasswordView.vue';
import UserView from '@/views/UserView/UserView.vue'

// Import Toast Library
import {useToast} from 'vue-toastification'
// Get toast interface
const toast = useToast()

import store from './../store'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory('/front-end'),
    routes: [
        {
            path: "/:catchAll(.*)",
            redirect: {name: 'signin'},
        },
        {
            path: '/',
            redirect: {name: 'signin'},
            meta: {
                disableIfLoggedIn: true
            }
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupView,
            meta: {
                disableIfLoggedIn: true
            }
        },
        {
            name: 'signin',
            path: '/signin',
            component: SigninView,
            meta: {
                public: true,
                disableIfLoggedIn: true
            }
        },
        {
            name: 'forgot',
            path: '/forgot',
            component: ForgotPasswordView,
            meta: {
                public: true,
                disableIfLoggedIn: true
            }
        },
        {
            path: '/user',
            name: 'user',
            component: UserView,
            meta: {
                requiresAuth: true
                // public: true,
                // disableIfLoggedIn: true
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next({
                name: 'signin'
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
                name: 'user'
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
