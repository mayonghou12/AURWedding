<template>
    <div>
        <ul class="w-960 photo margin-30-top">
            <li :key="index" v-for="(item, index) in weddingList" class="fl">
                <router-link :to="/wedding1/ + item.wed_id">
                    <img :src="api + item.img_url[0]" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">{{item.wed_title}}</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <!-- <li class="fl">
                <router-link to="/wedding1">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103736J1V9B.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 01</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/wedding2">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103957iy3LQ.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 02</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/wedding3">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/103457kBR6R.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 03</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/wedding4">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/102558C70gP.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 04</span>
                            </div>
                        </div>
                    </div>
                    </router-link>
            </li>
            <li class="fl">
                <router-link to="/wedding5">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/104213NZZs9.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 05</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="fl">
                <router-link to="/wedding6">
                    <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/104430bKnR3.jpg@385w_359h_1e_1c.jpg" />
                    <div class="zhezhao">
                        <div class="cont">
                            <div class="biankuang">
                                <img class="logo" src="../../../../assets/img/logo.png" />
                                <span class="title">结婚三件套 06</span>
                            </div>
                        </div>
                    </div>
                </router-link>
            </li> -->
        </ul>
    </div>
</template>

<script>
import { api } from 'pub/api.js'
export default {
  data () {
    return {
      api
    }
  },
  created () {
    this.$store.dispatch('home/actionGetWedding')
  },
  computed: {
    weddingList () {
      return this.$store.state.home.weddingList
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
 .photo li {
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
            bottom: 0px;
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
                    display: inline-block;
                    width: 100%;
                    .font(8);
                    text-align: center;
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
