import Vue from 'vue'
import VueRouter from 'vue-router'
import Jewelry from '@/views/jewelry'
import SubpageOne from '@/views/jewelry/subpageOne.vue'
import SubpageTwo from '@/views/jewelry/subpageTwo.vue'
import SubpageThree from '@/views/jewelry/subpageThree.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Jewelry
  },
  {
    path: '/subpageOne',
    component: SubpageOne
  },
  {
    path: '/subpageTwo',
    component: SubpageTwo
  },
  {
    path: '/subpageThree',
    component: SubpageThree
  }
]

const router = new VueRouter({
  routes
})

export default router
