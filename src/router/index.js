import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import LoadingScreen from '../views/LoadingScreen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/oops',
    name: 'Error',
    component: Error
  },
  {
    path: '/loading',
    name: 'Loading',
    component: LoadingScreen
  }
]

const router = new VueRouter({
  routes
})

export default router
