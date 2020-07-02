<template>
    <div>
        <!-- 酒店页面 -->
        <div class="content">
            <!-- 标题 -->
            <div class="hotel-title">
                <p></p>
            </div>
            <!-- body -->
            <div class="hotel-body">
                <!-- 酒店描述 -->
                <h3>福建地区（部分）</h3>
                <ul class="hotel-pub">
                    <li :key="index" v-for="(item, index) in typeList">
                      <router-link :to="/hotels/ + item.hot_id">
                        <img :src="api + item.img_url" />
                      </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import { getHotel } from 'public/axiosRequest'
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      api
      // list: [
      //   {
      //     to: '/hotel',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/180514CnAa0.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel1',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175422OWl5W.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel2',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175407ZqFx6.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel3',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175355VFmMv.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel4',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175341hC3Vf.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel5',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175327Gd6wn.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel6',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175313Eomtu.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel7',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175259qbr21.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel8',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175243Qu8tu.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel9',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175226YXZJn.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel10',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175212zb61H.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel11',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175156eCo0Y.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel12',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175142I8WE4.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel13',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175129pVYiV.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel14',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175113sF4qA.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel15',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175058WZswQ.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel16',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175044ZT5OC.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel17',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175030N2mpL.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel18',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175016pFpP5.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel19',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/175002iIjVi.jpg@284w_208h_1e_1c.jpg'
      //   },
      //   {
      //     to: '/hotel20',
      //     img: 'http://pic.tdy.picdns.com/52-0146/show/201709/08/174946nlP9y.jpg@284w_208h_1e_1c.jpg'
      //   }
      // ]
    }
  },
  created () {
    // console.log(this.$store.state.hep.typeList)
    this.$store.dispatch('hep/actionGetHotelList')
  },
  computed: {
    typeList () {
      return this.$store.state.hep.typeList
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~css/hotel.css';
</style>
