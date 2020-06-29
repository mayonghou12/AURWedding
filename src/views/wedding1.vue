<template>
    <div class="wp">
      <div class="tit03 showtit03">
        <h3>
            <a href="show-list-2789-1.html">婚礼图片</a>
            <em></em>
        </h3>
      </div>
      <div class="view-show cl">
        <div class="vs01 1">
            <h3>【{{title}}】</h3>
        <div class="article">
            <div class="default-article-content">
                <p style="text-indent: 2em;">白首永偕</p>
                <p style="text-indent: 2em;">花好月圆</p>
                <p style="text-indent: 2em;">欣燕尔之</p>
                <p style="text-indent: 2em;">将泳海枯石烂</p>
                <p style="text-indent: 2em;">指鸳鸯而先盟</p>
                <p style="text-indent: 2em;">谨订此约</p>
                <!-- <p><img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103736J1V9B.jpg"/></p>
                <p><img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103736jjUZu.jpg"/></p>
                <p><img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103736SoemP.jpg"/></p> -->
            </div>
            <img :key="index" v-for="(item, index) in current" :src="api + item" />
            <div class="page">
                <router-link class="prev" v-if="prev.wed_id" :to="'/wedding1/' + prev.wed_id">上一篇：
                    <span>
                        {{prev.wed_title}}
                    </span>
                </router-link>
                <router-link class="next" v-if="next.wed_id" :to="'/wedding1/' + next.wed_id">下一篇：
                    <span>
                        {{next.wed_title}}
                    </span>
                </router-link>
            </div>
            <!-- <div class="fanye">
                <p>下一篇：<router-link to='/wedding2'>【鲲鹏翼·青云志】</router-link></p>
            </div> -->
        </div>
        </div>
        <div class="vs02">
            <span></span>
            <router-link to='/'>咨询婚礼顾问</router-link>
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
      next: {},
      prev: {},
      title: {},
      api
    }
  },
  created () {
    var weddingList = this.$store.state.home.weddingList
    if (weddingList <= 0) {
      this.$store.dispatch('home/actionGetWedding')
      this.changeImgText()
    }
    this.changeImgText()
  },
  watch: {
    '$route' () {
      this.changeImgText()
    },
    '$store.state.home.weddingList' () {
      this.changeImgText()
    }
  },
  methods: {
    changeImgText () {
      var weddingList = this.$store.state.home.weddingList
      weddingList.forEach((item, index) => {
        console.log(this.$route.params.id, item.wed_id, item.wed_id === this.$route.params.id)
        if (item.wed_id === parseInt(this.$route.params.id)) {
          this.current = item.img_url
          this.title = item.wed_title
          if (index < weddingList.length - 1) {
            this.next = weddingList[index + 1]
          } else {
            this.next = {}
          }
          if (index > 0) {
            this.prev = weddingList[index - 1]
          } else {
            this.prev = {}
          }
        }
      })
    }
  }
}
</script>

<style scoped>
p h3 {
    margin: 0;
    padding: 0;
}
a {
    color: #333;
    text-decoration: none;
}
.wp {
    width: 960px;
    margin: 0 auto;
}
.tit03 {
    height: 111px;
    margin: 30px 0;
    background: url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/vs.png)no-repeat center left;
}
.tit03 h3 {
    padding-left: 480px;
    line-height: 111px;
    font-size: 25px;
    font-family: simsun;
    font-weight: bold;
    color: #5b5a5a;
        position: relative;
}
.showtit03 em {
    display: block;
    position: absolute;
    left: 155px;
    bottom: 28px;
    width: 500px;
    border-bottom: 2px solid #6b5c4c;
}

.vs01 {
    width: 65%;
    padding: 2%;
    background: #fff;
    float: left;
}
.vs01 h3 {
    font-size: 30px;
        font-weight: 400;
}

img {
    width: 100%;
    /* height: 250px; */
    margin: 10px auto;
}

.page {
    margin-bottom: 20px;
}

.prev {
    font-size: 30px;
    color: #000;
}

.next {
    font-size: 30px;
    color: #000;
}

.article span {
    display: inline-block;
}

.default-article-content {
    text-align: justify;
    font-size: 14px;
}
element.style {
    text-indent: 2em;
}
.default-article-content p {
    margin-top: 1em;
    margin-bottom: 1em;
}
p {
    word-wrap: break-word;
}
.fanye {
    margin: 30px 0;
}
.fanye p {
    font-size: 15px;
    line-height: 30px;
}
.fanye p a {
    color: #999;
}

.vs02 {
    width: 28%;
    float: right;
}
.vs02 span {
    display: block;
    height: 200px;
    background: #fff url(http://www.52-0146.demo.taiduyun.com/temp/temp/52/52-0146/201709061819/images/logo03.png)no-repeat center center;
}
.vs02 a {
    display: block;
    line-height: 57px;
    color: #615140;
    font-size: 18px;
    text-align: center;
    background: #d4caaf;
    transition: all .3s;
}
</style>
