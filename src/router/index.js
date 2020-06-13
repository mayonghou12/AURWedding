import Vue from 'vue'
import VueRouter from 'vue-router'
import Brand from '@/views/brand'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Brand
  }
]

const router = new VueRouter({
  routes
})

export default router
