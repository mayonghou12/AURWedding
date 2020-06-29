<template>
    <div>
        <div class="content">
            <div class="w-960">
                <div class="box">
                    <a>珠宝</a>
                </div>
            </div>
            <div class="w-960 margin-15-top">
                <div class="left fl">
                    <p>{{current.jew_title}}</p>
                    <img :src="api + current.img_url" />
                    <router-link class="prev" v-if="prev.jew_id" :to="'/subpageOne/' + prev.jew_id">上一篇：
                        <span>
                            {{prev.jew_title}}
                        </span>
                    </router-link>
                    <router-link class="next" v-if="next.jew_id" :to="'/subpageOne/' + next.jew_id">下一篇：
                        <span>
                            {{next.jew_title}}
                        </span>
                    </router-link>
                </div>
                <div class="right fr">
                    <div class="img"></div>
                    <a href="#">咨询婚礼顾问</a>
                </div>
            </div>
        </div>
    </div>
</template>

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
    var typeList = this.$store.state.home.typeList
    console.log(typeList)
    if (typeList.length <= 0) {
      this.$store.dispatch('home/actionGetJewelryList')
    }
    this.changeCurrentImg()
  },
  computed: {
    typeList () {
      return this.$store.state.home.typeList
    }
  },
  watch: {
    '$store.state.home.typeList' () {
      this.changeCurrentImg()
    },
    '$route' () {
      this.changeCurrentImg()
    }
  },
  methods: {
    changeCurrentImg () {
      var typeList = this.$store.state.home.typeList
      console.log(typeList)
      typeList.forEach((item, index) => {
        console.log(item.jew_id, this.$route.params.id, item.id === this.$route.params.id)
        if (item.jew_id === parseInt(this.$route.params.id)) {
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

<style lang="less" scoped>
@import '~css/common.less';
.content {
    background: #eae9e9;
    padding: 25px;
}
.w-960 {
    margin: 0 auto;
}
.box {
    .background(pink);
    width: 100%;
    position: relative;
    height: 167px;
    background: url(../../assets/img/vs.png)no-repeat center left;
    & a{
        font-size: 25px;
        position: absolute;
        top: 66px;
        left: 480px;
        color: #5b5a5a;
    }
}
.left {
    background: #fff;
    width: 663px;
    height: 714px;
    position: relative;
    & p {
        width: 100%;
        font-size: 30px;
        font-weight: 400;
        padding: 15px;
        display: block;
    }
    & img {
        position: absolute;
        top: 88px;
        left: 105px;
    }
    & .prev {
        font-size: 30px;
        position: absolute;
        bottom: 100px;
        left: 15px;
        color: #000;
    }
    & .next {
        font-size: 30px;
        position: absolute;
        bottom: 50px;
        left: 15px;
        color: #000;
    }
}
.right {
    width: 269px;
    height: 257px;
    & .img{
        height: 200px;
        display: block;
        background: #fff url(../../assets/img/logo03.png)no-repeat center center;
    }
    & a {
        color: #615140;
        font-size: 18px;
        display: block;
        height: 57px;
        background: #d4caaf;
        text-align: center;
        line-height: 57px;
    }
    & a:hover {
        transform:  all 0.3s;
        background: #615140;
        color: #fff;
    }
}
</style>
