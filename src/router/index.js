import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { authService } from '../plugins/fbase'
const beforeEnter= (to, from, next) => {
  const user = authService.currentUser
  if(!user) {
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Auth',
    name: 'Auth',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Auth.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
