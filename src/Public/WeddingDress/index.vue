<template>
<div>
    <!-- 婚纱 -->
    <div class="content">
        <!-- 婚纱标题 -->
        <div class="Wed-title">
            <p></p>
        </div>
        <div class="Wed-dress">
            <div v-for="(dress, index) in DressList" :key="index" class="dress">
                <router-link :to="dress.to">
                    <img :src="dress.img" alt="">
                </router-link>
                 <div class="dress-title">{{dress.name}}</div>
            </div>
            <!-- <div class="dress">
                <router-link to="/weddingd">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg" alt="">
                </router-link>
                 <div class="dress-title">秋冬苏妃(3)</div>
            </div> -->
            <!-- <div class="dress">
                <router-link to="/weddingd1">
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104706X443H.jpg@308w_461h_1e_1c.jpg" alt="">
                </router-link>
            </div>
            <div class="dress">
                <router-link to="/weddingd2">
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104500k3YX8.jpg@308w_461h_1e_1c.jpg" alt="">
                </router-link>
            </div>
            <div class="dress">
                <router-link to="/weddingd3">
                    <div class="dress-title">秋冬苏妃(3)</div>
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104342G9m0z.jpg@308w_461h_1e_1c.jpg" alt="">
                </router-link>
            </div> -->
        </div>
    </div>
</div>
</template>
<style lang="stylus" scoped>
@import '~css/dress.css';
</style>
<script>
export default {
  data () {
    return {
      DressList: [
        {
          to: '/weddingd',
          img: 'http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg@308w_461h_1e_1c.jpg',
          name: '秋冬苏妃(3)'
        },
        {
          to: '/weddingd1',
          img: 'http://pic.tdy.picdns.com/52-0146/show/201709/14/104706X443H.jpg@308w_461h_1e_1c.jpg',
          name: '秋冬苏妃(3)'
        },
        {
          to: '/weddingd2',
          img: 'http://pic.tdy.picdns.com/52-0146/show/201709/14/104500k3YX8.jpg@308w_461h_1e_1c.jpg',
          name: '秋冬苏妃(3)'
        },
        {
          to: '/weddingd3',
          img: 'http://pic.tdy.picdns.com/52-0146/show/201709/14/104342G9m0z.jpg@308w_461h_1e_1c.jpg',
          name: '秋冬苏妃(3)'
        }
      ]
    }
  }
}
</script>
