import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { authService } from '../plugins/fbase'

const beforeEnter= async (to, from, next) => {
  const user = JSON.parse(localStorage.getItem('userState'))
  if(!user.uid) {
    next('/Auth')
  }
  next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter
  },
  {
    path: '/Auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  },
  {
    path: '/CreatePaperForm',
    name: 'CreatePaperForm',
    // beforeEnter,
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePaperForm.vue')
  },
  {
    path: '/ImportData',
    name: 'ImportData',
    // beforeEnter,
    component: () => import(/* webpackChunkName: "about" */ '../views/ImportData.vue')
  },
  {
    path: '/SelectPaperForm',
    name: 'SelectPaperForm',
    // beforeEnter,
    component: () => import(/* webpackChunkName: "about" */ '../views/SelectPaperForm.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
