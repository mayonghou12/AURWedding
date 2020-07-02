<template>
    <div id="#app">
        <div class="dress-c">
            <!-- 头部内容 -->
            <div class="dress-c-title">
                <h3>
                    <a href="">
                        婚纱
                    </a>
                    <em></em>
                </h3>
            </div>
            <!-- 头部内容结束 -->
            <div class="dress-content">
                <!-- 婚纱左边内容开始 -->
                <div class="content-left">
                    <div class="content-left-title"><h3>{{title}}</h3></div>
                    <!-- 图片内容 -->
                    <div v-for="(item, index) in current" :key="index" class="content-left-img">
                       <img :src="api + item" />
                    </div>
                    <!-- <div class="content-left-img">
                       <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833NpA8l.jpg" alt="">
                    </div>
                    <div class="content-left-img">
                       <img src="http://pic.tdy.picdns.com/52-0146/show/201709/14/104833sIJ21.jpg" alt="">
                    </div> -->
                    <!-- 翻页开始 -->
                    <div class="fanye">
                        <router-link class="prev" v-if="prev.bv_id" :to="'/wedding/' + prev.bv_id">上一篇：
                            <span>
                                {{prev.bv_title}}
                            </span>
                        </router-link>
                        <router-link class="next" v-if="next.bv_id" :to="'/wedding/' + next.bv_id">下一篇：
                            <span>
                                {{next.bv_title}}
                            </span>
                    </router-link>
                    </div>
                </div>
                <!-- 婚纱右边内容开始 -->
                <div class="content-right">
                    <span class="content-right-img"></span>
                    <a href=""><span class="content-right-text">咨询婚礼顾问</span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import '~css/dress.css';
</style>
<script>
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      api,
      current: [],
      prev: {},
      next: {},
      title: {}
    }
  },
  created () {
    var typeList = this.$store.state.hep.typeList
    if (typeList.length <= 0) {
      this.$store.dispatch('hep/actionGetWeddingDressList')
    }
    this.getDrees()
  },
  computed: {
    typeList () {
      return this.$store.state.hep.typeList
    }
  },
  watch: {
    '$store.state.hep.typeList' () {
      this.getDrees()
    },
    '$route' () {
      this.getDrees()
    }
  },
  methods: {
    getDrees () {
      var typeList = this.$store.state.hep.typeList
      typeList.forEach((item, index) => {
        // console.log(item.bv_id, this.$route.params.id, item.bv_id === parseInt(this.$route.params.id))
        if (item.bv_id === parseInt(this.$route.params.id)) {
          this.current = item.img_url
          this.title = item.bv_title
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
