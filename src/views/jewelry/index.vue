<template>
    <div>
      <div class="top">
            <div class="zhubao">
                <span class="fl margin-10-left">AURORA</span>
                <span class="fl margin-10-left square margin-10-top"></span>
                <span class="fl margin-20-left">珠宝</span>
            </div>
            <div class="padding-10-left">
                <span>PREPARATION</span>
            </div>
        </div>
        <!-- <Head></Head>
        <Bottom></Bottom> -->
       <ul class="content">
           <li :key="index" v-for="(item, index) in typeList" class="fl" >
                <router-link :to="'/subpageOne/' + item.jew_id" >
                    <img :src="api + item.img_url" />
                    <div class="zhezhao">
                        <div name="cont" class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../assets/img/logo.png" />
                                <span class="title">{{item.jew_title}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
// import Head from 'views/jewelry/head'
// import Bottom from 'views/jewelry/bottom'
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      api
    }
  },
  components: {
    // Head,
    // Bottom
  },
  computed: {
    typeList () {
      // console.log(this.$store.state)
      return this.$store.state.home.typeList
    }
  },
  created () {
    this.$store.dispatch('home/actionGetJewelryList')
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.top {
    .size (960,70);
    & .zhubao {
        .size (960,45);
        .border-bottom (2, solid, #ddd);
        .color(#5a5a5a);
        .line-height (43);
        .font (14);
        & .square {
            .size (25,25);
            .background (#a1906a);
            .block;
        }
    }
}
.text {
    & span {
        .inline-block;
        .color(#000);
        .font(6);
        margin-top: 8px;
    }
}
.content {
    width: 960px;
    margin: 35px auto;
}
li {
    .size(320,300);
    position: relative;
    & img {
        .size(311,290);
    }
    &:hover img {
        opacity: 0.8;
    }
    & .zhezhao {
        display: none;
        .size(311,290);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .cont{
            position: absolute;
            left: 25px;
            bottom: 92px;
            display: none;
        }
    }
    &:hover .zhezhao {
        .size(311,290);
        display: block;
        z-index: 100;
        & .cont {
            animation: move .5s forwards;
            display: block;
            .size(256, 104);
            position: absolute;
            left: 25px;
            bottom: 0px;
            .background(#cbcccc);
            .color(#a1906a);
            z-index: 999;
            & .biankuang {
                margin: 2px;
                padding: 10px;
                .size(252, 100);
                .border(1, solid, #000);
                & .logo {
                    .size(210, 50);
                    margin: 0 8px;
                    .border-bottom(4px, solid, #a1906a);
                }
                & .title {
                    margin-left: 60px;
                    .font(8);
                }
            }
        }
    }
}

@keyframes move {
    from {
        bottom:0px;
    }
    to {
        bottom:92px;
    }
}

</style>
