<template>
    <div>
        <Top></Top>
        <div class="w-960">
            <div class="guard-box">
                <span>{{title}}</span>
                <div v-for="(item,index) in current" :key="index" class="img-box">
                    <img :src="api + item" />
                </div>
                <div class="page">
                  <router-link class="prev" v-if="prev.tour_id" :to="'/details/' + prev.tour_id">上一篇：
                    <span>
                        {{prev.tour_title}}
                    </span>
                  </router-link>
                  <router-link class="next" v-if="next.tour_id" :to="'/details/' + next.tour_id">下一篇：
                      <span>
                          {{next.tour_title}}
                      </span>
                  </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Top from '@/views/photo/top/top.vue'
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      current: {},
      prev: {},
      next: {},
      title: {},
      api
    }
  },
  components: {
    Top
  },
  created () {
    var typeList = this.$store.state.home.typeList
    if (typeList.length <= 0) {
      this.$store.dispatch('home/actionGetTourPhoto')
      this.changeTourPhoto()
    }
    this.changeTourPhoto()
  },
  watch: {
    '$store.state.home.typeList' () {
      this.changeTourPhoto()
    },
    '$route' () {
      this.changeTourPhoto()
    }
  },
  methods: {
    changeTourPhoto () {
      var typeList = this.$store.state.home.typeList
      typeList.forEach((item, index) => {
        console.log(item.tour_id, this.$route.params.id, item.id === this.$route.params.id)
        if (item.tour_id === parseInt(this.$route.params.id)) {
          this.current = item.img_url
          this.title = item.tour_title
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

<style lang="less" scoped>
@import '~css/common.less';
.w-960 {
    margin: 0 auto;
    & .guard-box {
        background: #fff;
        padding: 30px 2%;
        width: 96%;
        display: block;
        // position: relative;
        margin-bottom: 50px;
        & span {
            text-align: center;
            font-size: 35px;
            display: block;
            text-align: center;
            color: #615140;
            font-weight: 400;
            margin-bottom: 20px;
        }
        & .img-box {
            width: 800px;
            height: 500px;
            text-align: justify;
            font-size: 14px;
            display: block;
            margin: auto auto;
            margin-bottom: 50px;
            & img {
                width: 100%;
                height: 500px;
                max-width: 100%;
                margin-bottom: 5px;
            }
        }
        & .page {
          margin-bottom: 20px;
          // border: 1px solid red;
          & .prev {
            font-size: 30px;
            // position:
            color: #000;
            & span {
              display: inline-block;
            }
          }
          & .next {
              font-size: 30px;
              color: #000;
            & span {
              display: inline-block;
          }
        }
      }
    }
}
</style>
