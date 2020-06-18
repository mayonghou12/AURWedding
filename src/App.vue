<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <!-- <Wedding></Wedding> -->
    <!-- <SubpageOne></SubpageOne> -->
    <!-- <SubpageTwo></SubpageTwo> -->
    <Hotel></Hotel>
    <Competate></Competate>
    <WeddingDress></WeddingDress>
    <Dress></Dress>
    <HoneyMoon></HoneyMoon>
    <HMson></HMson>
  </div>
</template>

<script>
import Wedding from '@/views/wedding/index.vue'
// import SubpageOne from '@/views/jewelry/subpageOne.vue'
// import SubpageTwo from '@/views/jewelry/subpageTwo.vue'
import Hotel from './Public/Hotel'
import Competate from './Public/Hotel/Competate'
import WeddingDress from './Public/WeddingDress'
import Dress from './Public/WeddingDress/Dress'
import HoneyMoon from './Public/HoneyMoon'
import HMson from './Public/HoneyMoon/HMson'
export default {
  components: {
    // Wedding
    // SubpageOne,
    // SubpageTwo
    Hotel,
    Competate,
    WeddingDress,
    Dress,
    HoneyMoon,
    HMson
  }

}
</script>
