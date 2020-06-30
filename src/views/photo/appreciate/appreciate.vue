<template>
    <div>
        <Top></Top>
        <div class="kepian w-960">
            <div class="tour">
                <div class="tit">
                    <span>客片欣赏</span>
                    <em> love show</em>
                    <p></p>
                </div>
                <ul>
                    <li :key="index" v-for="(item,index) in typeList">
                        <router-link :to="/details/+ item.tour_id">
                            <img :src="api + item.img_url[0]" />
                        </router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/shouhuy">
                            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/100019GSNKs.jpg@386w_443h_1e_1c.jpg" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/yunitongzai">
                            <img src="../../../assets/img/100228N0206.jpg@386w_443h_1e_1c.jpg" />
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/haibianlanman">
                            <img src="http://pic.tdy.picdns.com/52-0146/show/201709/07/095707WgPDk.jpg@386w_443h_1e_1c.jpg" />
                        </router-link>
                    </li> -->
                </ul>
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
      api
    }
  },
  components: {
    Top
  },
  created () {
    this.$store.dispatch('home/actionGetTourPhoto')
  },
  computed: {
    typeList () {
      return this.$store.state.home.typeList
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/common.less';
.kepian {
    // margin: 0 auto;
    background: #fff;
    padding: 30px 2%;
    width: 100%;
    & .tour {
        display: block;
        & .tit {
            text-align: center;
            height: 70px;
            margin-top: 25px;
            width: 100%;
            position: relative;
            & span {
                font-size: 33px;
                line-height: 1;
                color: #615140;;
                background: #fff;
                padding: 0 15px;
                display: inline-block;
            }
            & em {
                text-transform: uppercase; // 英文全转换为大写
                font-size: 24px;
                display: block;
                font-style: normal;
                width: 100%;
                text-align: center;
                margin-top: 10px;
            }
            & p {
                border-top: 2px solid #ddd;
                margin-top: -50px;
                word-wrap: break-word;
            }
        }
        & ul {
            margin-top: 10px;
            zoom: 1;
            & li {
                float: left;
                width: 32.2%;
                margin-right: 10px;
                margin-bottom: 1.1%;
                & a {
                    color: #333;
                    display: block;
                    & img {
                        width: 300px;
                        height: 344.8px;
                        transition: all .5s;
                    }
                    & img:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
}
</style>
