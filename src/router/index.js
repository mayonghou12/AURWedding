import Vue from 'vue'
import VueRouter from 'vue-router'
import Jewelry from '@/views/jewelry'

Vue.use(VueRouter)

const routes = [
  {
    path: '/jewelry',
    component: Jewelry
  }
]

const router = new VueRouter({
  routes
})

export default router
