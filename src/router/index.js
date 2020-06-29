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
import yearly from '@/views/photo/yearly/yearly.vue'
import appreciate from '@/views/photo/appreciate/appreciate.vue'
import details from '@/views/photo/appreciate/details.vue'

import inlandphoto from '@/views/wedding/inland/bottom/photo.vue'
import inlandvideo from '@/views/wedding/inland/bottom/video.vue'
import crystal from '@/views/wedding/overseas/crystal.vue'
import diamond from '@/views/wedding/overseas/diamond.vue'

import brandone from 'comp/Home/Right/brand-1.vue'
import brandtwo from 'comp/Home/Right/brand-2.vue'
import brandthree from 'comp/Home/Right/brand-3.vue'
import brandfor from 'comp/Home/Right/brand-4.vue'
import brandfive from 'comp/Home/Right/brand-5.vue'
import brandsix from 'comp/Home/Right/brand-6.vue'
import Beauty from 'comp/Beauty/index.vue'
import beautyone from 'comp/Beauty/beauty-1.vue'
import beautytwo from 'comp/Beauty/beauty-2.vue'
import beautythree from 'comp/Beauty/beauty-3.vue'
import beautyfor from 'comp/Beauty/beauty-4.vue'

import Hotels from '@/Public/Hotel/index.vue'
import Hotel from '@/Public/Hotel/Competate/index.vue'
import Hotel1 from '@/Public/Hotel/Competate/index1.vue'
import Hotel2 from '@/Public/Hotel/Competate/index2.vue'
import Hotel3 from '@/Public/Hotel/Competate/index3.vue'
import Hotel4 from '@/Public/Hotel/Competate/index4.vue'
import Hotel5 from '@/Public/Hotel/Competate/index5.vue'
import Hotel6 from '@/Public/Hotel/Competate/index6.vue'
import Hotel7 from '@/Public/Hotel/Competate/index7.vue'
import Hotel8 from '@/Public/Hotel/Competate/index8.vue'
import Hotel9 from '@/Public/Hotel/Competate/index9.vue'
import Hotel10 from '@/Public/Hotel/Competate/index10.vue'
import Hotel11 from '@/Public/Hotel/Competate/index11.vue'
import Hotel12 from '@/Public/Hotel/Competate/index12.vue'
import Hotel13 from '@/Public/Hotel/Competate/index13.vue'
import Hotel14 from '@/Public/Hotel/Competate/index14.vue'
import Hotel15 from '@/Public/Hotel/Competate/index15.vue'
import Hotel16 from '@/Public/Hotel/Competate/index16.vue'
import Hotel17 from '@/Public/Hotel/Competate/index17.vue'
import Hotel18 from '@/Public/Hotel/Competate/index18.vue'
import Hotel19 from '@/Public/Hotel/Competate/index19.vue'
import Hotel20 from '@/Public/Hotel/Competate/index20.vue'
import weddingdress from '@/Public/WeddingDress/index.vue'
import weddingd from '@/Public/WeddingDress/Dress/index.vue'
import weddingd1 from '@/Public/WeddingDress/Dress/index1.vue'
import weddingd2 from '@/Public/WeddingDress/Dress/index2.vue'
import weddingd3 from '@/Public/WeddingDress/Dress/index3.vue'
import honeymoon from '@/Public/HoneyMoon/index.vue'
import hmson from '@/Public/HoneyMoon/HMson/index.vue'
import hmson1 from '@/Public/HoneyMoon/HMson/index1.vue'
import News from '@/Public/News/index.vue'
import preparation from '@/Public/News/NewsLittle/index.vue'
import starBroker from '@/Public/News/NewsLittle/index1.vue'
import newsNav1 from '@/Public/News/NewsLittle/index2.vue'
import newsNav2 from '@/Public/News/NewsLittle/index3.vue'
import newsNav3 from '@/Public/News/NewsLittle/index4.vue'
import newsNav4 from '@/Public/News/NewsLittle/index5.vue'
import newsNav5 from '@/Public/News/NewsLittle/index6.vue'
import newsNav6 from '@/Public/News/NewsLittle/index7.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  }, {
    path: '/jewelry',
    component: Jewelry
  }, {
    path: '/subpageOne/:id',
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
    path: '/wedding1/:id',
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
    component: inland,
    redirect: (to) => {
      return '/inlandphoto'
    },
    children: [{
      path: '/inlandphoto',
      component: inlandphoto
    }, {
      path: '/inlandvideo',
      component: inlandvideo
    }]
  },
  {
    path: '/crystal',
    component: crystal
  }, {
    path: '/diamond',
    component: diamond
  },
  {
    path: '/hotels',
    component: Hotels
  }, {
    path: '/hotel',
    component: Hotel
  }, {
    path: '/hotel1',
    component: Hotel1
  }, {
    path: '/hotel2',
    component: Hotel2
  }, {
    path: '/hotel3',
    component: Hotel3
  }, {
    path: '/hotel4',
    component: Hotel4
  }, {
    path: '/hotel5',
    component: Hotel5
  }, {
    path: '/hotel6',
    component: Hotel6
  }, {
    path: '/hotel7',
    component: Hotel7
  }, {
    path: '/hotel8',
    component: Hotel8
  }, {
    path: '/hotel9',
    component: Hotel9
  }, {
    path: '/hotel10',
    component: Hotel10
  }, {
    path: '/hotel11',
    component: Hotel11
  }, {
    path: '/hotel12',
    component: Hotel12
  }, {
    path: '/hotel13',
    component: Hotel13
  }, {
    path: '/hotel14',
    component: Hotel14
  }, {
    path: '/hotel15',
    component: Hotel15
  }, {
    path: '/hotel16',
    component: Hotel16
  }, {
    path: '/hotel17',
    component: Hotel17
  }, {
    path: '/hotel18',
    component: Hotel18
  }, {
    path: '/hotel19',
    component: Hotel19
  }, {
    path: '/hotel20',
    component: Hotel20
  }, {
    path: '/weddingdress',
    component: weddingdress
  }, {
    path: '/weddingd',
    component: weddingd
  }, {
    path: '/weddingd1',
    component: weddingd1
  }, {
    path: '/weddingd2',
    component: weddingd2
  }, {
    path: '/weddingd3',
    component: weddingd3
  }, {
    path: '/honeymoon',
    component: honeymoon
  }, {
    path: '/hmson',
    component: hmson
  }, {
    path: '/hmson1',
    component: hmson1
  }, {
    path: '/news',
    component: News
  }, {
    path: '/preparation',
    component: preparation
  }, {
    path: '/starBroker',
    component: starBroker
  }, {
    path: '/newsNav1',
    component: newsNav1
  }, {
    path: '/newsNav2',
    component: newsNav2
  }, {
    path: '/newsNav3',
    component: newsNav3
  }, {
    path: '/newsNav4',
    component: newsNav4
  }, {
    path: '/newsNav5',
    component: newsNav5
  },
  {
    path: '/newsNav6',
    component: newsNav6
  }, {
    path: '/yearly',
    component: yearly
  }, {
    path: '/appreciate',
    component: appreciate
  }, {
    path: '/details/:id',
    component: details
  }, {
    path: '/overseas',
    component: overseas
  }, {
    path: '/index.vue',
    component: Beauty
  }, {
    path: '/beautyone',
    component: beautyone
  }, {
    path: '/beautytwo',
    component: beautytwo
  },
  {
    path: '/beautythree',
    component: beautythree
  },
  {
    path: '/beautyfor',
    component: beautyfor
  },
  {
    path: '/brandone',
    component: brandone
  },
  {
    path: '/brandtwo',
    component: brandtwo
  },
  {
    path: '/brandthree',
    component: brandthree
  },
  {
    path: '/brandfor',
    component: brandfor
  },
  {
    path: '/brandfive',
    component: brandfive
  },
  {
    path: '/brandsix',
    component: brandsix
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
