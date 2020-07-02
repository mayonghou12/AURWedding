<template>
    <div>
        <div class="ht-c">
            <!-- 头部内容 -->
            <div class="ht-c-title">
                <h3>
                    <a href="">
                        合作酒店
                    </a>
                    <em></em>
                </h3>
            </div>
            <!-- 头部内容结束 -->
            <!-- 内容 -->
            <div class="ht-c-content">
                <!-- 左部分内容 -->
                <div class="ht-content-left">
                    <div class="ht-content-title">{{current.hot_name}}</div>
                    <ul class="ht-content-img">
                       <li>
                            <a>
                                <img :src="api + current.img_url"/>
                            </a>
                            <div class="text">
                                <p>
                                    {{current.hot_detail}}
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div class="ht-content-skip">
                        <router-link class="prev" v-if="prev.hot_id" :to="'/hotels/' + prev.hot_id">上一篇：
                        <span>
                            {{prev.hot_name}}
                        </span>
                    </router-link>
                    <router-link class="next" v-if="next.hot_id" :to="'/hotels/' + next.hot_id">下一篇：
                        <span>
                            {{next.hot_name}}
                        </span>
                    </router-link>
                    </div>
                </div>
                <!-- 右部分内容 -->
                <div class="ht-content-right">
                    <div class=" ht-right-img"></div>
                    <a href=""><span class="ht-right-text">咨询婚礼顾问</span></a>
                </div>
                <!-- 内容结束 -->
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '~css/hotel.css';
</style>
<script>
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      current: {},
      prev: {},
      next: {},
      api
    }
  },
  created () {
    var typeList = this.$store.state.hep.typeList
    if (typeList.length <= 0) {
      this.$store.dispatch('hep/actionGetHotelList')
    }
    this.changeGetHotel()
  },
  computed: {
    typeList () {
      return this.$store.state.hep.typeList
    }
  },
  watch: {
    '$store.state.hep.typeList' () {
      this.changeGetHotel()
    },
    '$route' () {
      this.changeGetHotel()
    }
  },
  methods: {
    changeGetHotel () {
      var typeList = this.$store.state.hep.typeList
      typeList.forEach((item, index) => {
        // console.log(item.hot_id, this.$route.params.id, item.id === this.$route.params.id)
        if (item.hot_id === parseInt(this.$route.params.id)) {
          this.current = item
          if (index < typeList.length - 1) {
            this.next = typeList[index + 1]
          } else {
            this.next = {}
          }
          if (index > 0) {
            this.prev = typeList[index - 1]
          } else {
            this.prev = {}
          }
        }
      })
    }
  }
}
</script>
