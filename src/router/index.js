import Vue from 'vue'
import VueRouter from 'vue-router'
import Jewelry from '@/views/jewelry'
import Index from '@/views/lunbo.vue'
import haibianlanman from '@/views/haibianlanman.vue'
import shouhuy from '@/views/shouhuyishneg.vue'
import yunitongzai from '@/views/yunitongzai.vue'
import wedding1 from '@/views/wedding1.vue'
import wedding2 from '@/views/wedding2.vue'
import wedding3 from '@/views/wedding3.vue'
import wedding4 from '@/views/wedding4.vue'
import wedding5 from '@/views/wedding5.vue'
import wedding6 from '@/views/wedding6.vue'
import SubpageOne from '@/views/jewelry/subpageOne.vue'
import SubpageTwo from '@/views/jewelry/subpageTwo.vue'
import SubpageThree from '@/views/jewelry/subpageThree.vue'
import photo from '@/views/photo/photo.vue'
import inland from '@/views/wedding/inland.vue'
import overseas from '@/views/wedding/overseas.vue'
import Hotels from '@/Public/Hotel/index.vue'
import Hotel from '@/Public/Hotel/Competate/index.vue'
import weddingdress from '@/Public/WeddingDress/index.vue'
import weddingd from '@/Public/WeddingDress/Dress/index.vue'
import honeymoon from '@/Public/HoneyMoon/index.vue'
import hmoon from '@/Public/HoneyMoon/HMson/index.vue'
import yearly from '@/views/photo/yearly/yearly.vue'
import appreciate from '@/views/photo/appreciate/appreciate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  }, {
    path: '/jewelry',
    component: Jewelry
  }, {
    path: '/subpageOne',
    component: SubpageOne
  }, {
    path: '/subpageTwo',
    component: SubpageTwo
  }, {
    path: '/subpageThree',
    component: SubpageThree
  }, {
    path: '/shouhuy',
    component: shouhuy
  }, {
    path: '/yunitongzai',
    component: yunitongzai
  }, {
    path: '/haibianlanman',
    component: haibianlanman
  }, {
    path: '/wedding1',
    component: wedding1
  }, {
    path: '/wedding2',
    component: wedding2
  }, {
    path: '/wedding3',
    component: wedding3
  }, {
    path: '/wedding4',
    component: wedding4
  }, {
    path: '/wedding5',
    component: wedding5
  }, {
    path: '/wedding6',
    component: wedding6
  }, {
    path: '/photo',
    component: photo
  }, {
    path: '/inland',
    component: inland
  }, {
    path: '/hotels',
    component: Hotels
  }, {
    path: '/hotel',
    component: Hotel
  }, {
    path: '/weddingdress',
    component: weddingdress
  }, {
    path: '/weddingd',
    component: weddingd
  }, {
    path: '/honeymoon',
    component: honeymoon
  }, {
    path: '/hmoon',
    component: hmoon
  }, {
    path: '/yearly',
    component: yearly
  }, {
    path: '/appreciate',
    component: appreciate
  }, {
    path: '/overseas',
    component: overseas
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
